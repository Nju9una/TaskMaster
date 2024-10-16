from flask import Flask
from flask_migrate import Migrate 
from flask_restful import Resource, Api
from flask_bcrypt import Bcrypt
from flask_cors import CORS


from models import db
from resources.category import CategoryResource
from resources.task import TaskResource
from resources.taskcategory import TaskCategoryResource
from resources.project import ProjectResource
from resources.user import  UserResource, LoginResource

# Flask instance 
app = Flask(__name__)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///taskmanagement.db'
app.config['SQLALCHEMY_ECHO'] = True

# Create the database and migrate objects
migrate = Migrate(app, db)
db.init_app(app)

CORS(app)

bcrypt = Bcrypt(app)

# Create the API object
api = Api(app)

# Set up the routes for resources
api.add_resource(CategoryResource, '/categories', '/categories/<int:id>')
api.add_resource(TaskResource, '/tasks', '/tasks/<int:id>')
api.add_resource(TaskCategoryResource, '/taskcategories', '/taskcategories/<int:id>')
api.add_resource(ProjectResource, '/projects', '/projects/<int:id>')
api.add_resource(UserResource, '/users')
api.add_resource(LoginResource, '/login')

@app.route('/')
def index():
    return '<h1>Task Manager</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)
