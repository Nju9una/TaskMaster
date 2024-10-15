from flask import Flask
from flask_migrate import Migrate 
from flask_restful import Resource, Api

# from models import db
# from resources.project import ProjectResource
# from resources.task import TaskResource


# flask instance 
app = Flask(__name__)

# api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///taskmanagement.db'

#allow sqlalchemy to display generate sql on the terminal 
app.config['SQLALCHEMY_ECHO'] = True

#create the migrate object to manage migrations 
# migrate = Migrate(app, db)

@app.route('/')
def index():
    return '<h1>Task Manager</h1>'

# api.add_resource(ProjectResource, '/projects', '/projects/<int:id>')
# api.add_resource(TaskResource, '/tasks', '/tasks/<int:id>')  

if __name__ == '__main__':
    app.run(port=5555, debug=True)