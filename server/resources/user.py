from flask_restful import Resource
from flask import request
from flask_bcrypt import generate_password_hash, check_password_hash
from models import User, db
from flask_jwt_extended import create_access_token

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
        access_token = create_access_token(identity = user.id)
        
        return {
            "message": "User created successsfully",
            "user": new_user.to_dict(),
            "access_token": access_token
            }
      
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

            #jwt 
            access_token = create_access_token(identity = user.id)

            return {
                "message": "Login successful",
                "user": user.to_dict(),
                "access_token": access_token 
            }
        
        return {
            "message": "Invalid email/password"
        }, 401


        