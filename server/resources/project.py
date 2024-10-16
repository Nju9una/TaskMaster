from flask_restful import Resource, reqparse
from flask import request
from models import Project, db

class ProjectResource(Resource):

    def get(self, id=None):
        if id:
            project = Project.query.get(id)
            if project:
                return project.to_dict(), 200
                return {'error': 'Project not found'}, 404

        
            projects = Project.query.all()
            return [project.to_dict() for project in projects], 200

    def post(self):

        data = request.get_json()
        new_project = Project(
            name = data ['name'],
            description = data['description']
        )
        db.session.add(new_project)
        db.session.commit()
        return new_project.to_dict(), 201

    def put(self, id):

        project = Project.query.get(id)
        if project:
            data = request.get_json()
            project.name = data['name']
            project.description = ['description']
            db.session.commit()
            return project.to_dict(), 200

    def delete(self, id):
        project = Project.query.get(id)
        if project:
            db.session.delete(project)
            db.session.commit()
            return {'messsage': 'Project deleted' }, 200

        return {'error': 'Project not found'}, 404
