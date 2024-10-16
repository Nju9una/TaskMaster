from flask_restful import Resource
from flask import request
from models import db, Category

# Category Resource to handle CRUD operations for categories
class CategoryResource(Resource):

    # GET method to fetch all categories or a specific category by id
    def get(self, id=None):
        if id:
            # Fetch a specific category by its id
            category = Category.query.get(id)
            if category:
                return category.to_dict(), 200
            return {'error': 'Category not found'}, 404
        else:
            # Fetch all categories
            categories = Category.query.all()
            return [category.to_dict() for category in categories], 200

    # POST method to create a new category
    def post(self):
        # Extract name from request body
        data = request.get_json()
        new_category = Category(name=data['name'])
        try:
            db.session.add(new_category)
            db.session.commit()
            return new_category.to_dict(), 201
        except Exception as e:
            db.session.rollback()  # Rollback in case of error
            return {'error': str(e)}, 400

    # PUT method to update an existing category by id
    def put(self, id):
        # Fetch the category by id
        category = Category.query.get(id)
        if category:
            # Update the category's name with the new data
            data = request.get_json()
            category.name = data['name']
            try:
                db.session.commit()
                return category.to_dict(), 200
            except Exception as e:
                db.session.rollback()  # Rollback in case of error
                return {'error': str(e)}, 400
        return {'error': 'Category not found'}, 404

    # DELETE method to remove a category by id
    def delete(self, id):
        # Fetch the category by id
        category = Category.query.get(id)
        if category:
            db.session.delete(category)
            db.session.commit()
            return {'message': 'Category deleted'}, 200
        return {'error': 'Category not found'}, 404
