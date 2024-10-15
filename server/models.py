from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()

db = SQLAlchemy(metadata = metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

    # relationship
    projects = db.relationship('Project', back_populates="user")
    tasks = db.relationship('Task', back_populates="users")

    # serialization

    def _repr_(self):
        return f'<User {self.name}, {self.name}>'


class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullabe=False)
    
    #relationship
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates = "projects")

    task = db.relationship('Task', back_populates="project")

    created_at = db.Column(db.TIMESTAMP)

    def _repr_(self):
        return f'<Project {self.name}, {self.description}>'


class Task(db.Model, SerializerMixin):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullabe=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.Text, nullabe=False)
    due_date = db.Column(db.datetime)

    # relationship
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

    users = db.relationship('User', back_populates = "tasks")
    project = db.relationship('Project', back_populates="task")

    def _repr_(self):
        return f'Task {self.title}, {self.description}, {self.status}, {self.due_date}'

class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullabe=False)

    def _repr_(self):
        return f'<Category {self.name}>'

class TaskCategory(db.Model, SerializerMixin):
    __tablename__ = 'task_categories'

    #relationship