from flask_restful import Resource, reqparse
from models import Project, db

class ProjectResource(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument()

    def get(self, id=None):
        if id == None:
            projects = Project.query.all()
            return [project.to_dict() for project in projects], 200
