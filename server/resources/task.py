from flask_restful import Resource
from flask import request
from models import db, Task

# Task Resource to handle CRUD operations for tasks
class TaskResource(Resource):

    # GET method to fetch all tasks or a specific task by id
    def get(self, id=None):
        if id:
            # Fetch a specific task by its id
            task = Task.query.get(id)
            if task:
                return task.to_dict(), 200
            return {'error': 'Task not found'}, 404
        else:
            # Fetch all tasks
            tasks = Task.query.all()
            return [task.to_dict() for task in tasks], 200

    # POST method to create a new task
    def post(self):
        # Extract task data from the request body
        data = request.get_json()
        new_task = Task(
            title=data['title'],
            description=data['description'],
            status=data['status'],
            due_date=data['due_date'],
            user_id=data['user_id'],
            project_id=data['project_id']
        )
        try:
            db.session.add(new_task)
            db.session.commit()
            return new_task.to_dict(), 201
        except Exception as e:
            db.session.rollback()  # Rollback in case of error
            return {'error': str(e)}, 400

    # PUT method to update an existing task by id
    def put(self, id):
        # Fetch the task by id
        task = Task.query.get(id)
        if task:
            # Update the task's details
            data = request.get_json()
            task.title = data['title']
            task.description = data['description']
            task.status = data['status']
            task.due_date = data['due_date']
            try:
                db.session.commit()
                return task.to_dict(), 200
            except Exception as e:
                db.session.rollback()  # Rollback in case of error
                return {'error': str(e)}, 400
        return {'error': 'Task not found'}, 404

    # DELETE method to remove a task by id
    def delete(self, id):
        # Fetch the task by id
        task = Task.query.get(id)
        if task:
            db.session.delete(task)
            db.session.commit()
            return {'message': 'Task deleted'}, 200
        return {'error': 'Task not found'}, 404
