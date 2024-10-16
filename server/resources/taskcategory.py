from flask_restful import Resource
from flask import request
from models import db, TaskCategory

# TaskCategory Resource to manage the many-to-many relationship between tasks and categories
class TaskCategoryResource(Resource):

    # GET method to fetch all task-category relationships or a specific one by id
    def get(self, id=None):
        if id:
            # Fetch a specific task-category relationship by id
            task_category = TaskCategory.query.get(id)
            if task_category:
                return task_category.to_dict(), 200
            return {'error': 'TaskCategory not found'}, 404
        else:
            # Fetch all task-category relationships
            task_categories = TaskCategory.query.all()
            return [task_category.to_dict() for task_category in task_categories], 200

    # POST method to create a new task-category relationship
    def post(self):
        # Extract task-category data from the request body
        data = request.get_json()
        new_task_category = TaskCategory(
            task_id=data['task_id'],
            category_id=data['category_id'],
            priority=data.get('priority', 'normal')  # Default priority is 'normal'
        )
        db.session.add(new_task_category)
        db.session.commit()
        return new_task_category.to_dict(), 201

    # DELETE method to remove a task-category relationship by id
    def delete(self, id):
        # Fetch the task-category relationship by id
        task_category = TaskCategory.query.get(id)
        if task_category:
            db.session.delete(task_category)
            db.session.commit()
            return {'message': 'TaskCategory deleted'}, 200
        return {'error': 'TaskCategory not found'}, 404

