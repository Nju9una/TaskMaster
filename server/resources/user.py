from flask_restful import Resource
from flask import request
from flask_bcrypt import generate_password_hash, check_password_hash
from models import User, db

class UserResource(Resource):
    # create user
    def post(self):

        data = request.get_json()

        # verify email is unique
        email = User.query.filter_by(email = data['email']).first()

        if email:
            return{
                "message": "Email already taken"
            }, 422
        # encrypt password using flask_bcrypt
        hash = generate_password_hash(data['password']).decode('utf-8')  

        # save the uer to the db
        new_user = User(
            name = data['name'],
            email = data['email'],
            password = hash
        )  

        db.session.add(new_user)
        db.session.commit()

        # jwt
        
        return new_user.to_dict(), 201
      
class LoginResource(Resource):
    def post(self):
        data = request.get_json()

        # retrieve the user using the unique field
        user = User.query.filter_by(email = data['email']). first()

        if user == None:
            return {
                "error": "Invalid email/ password"
            }, 401
       
        # checks if the generated password matches 
        if check_password_hash(user.password,data['password']):

            return {
                "message": "Login successful",
                "user": user.to_dict() 
            }
        
        return {
            "message": "Invalid email/password"
        }, 401


        