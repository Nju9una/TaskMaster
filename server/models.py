from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)

# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

    # Relationships
    projects = db.relationship('Project', back_populates="user")
    tasks = db.relationship('Task', back_populates="user")  # Changed from users to user

    def __repr__(self):
        return f'<User {self.name}, {self.email}>'

# Project Model
class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)  # Fixed typo: nullabe to nullable
    
    # Relationship with User
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates="projects")

    # Relationship with Task
    tasks = db.relationship('Task', back_populates="project")  # Changed from task to tasks

    created_at = db.Column(db.TIMESTAMP)

    def __repr__(self):
        return f'<Project {self.name}, {self.description}>'

# Task Model
class Task(db.Model, SerializerMixin):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.Text, nullable=False)
    due_date = db.Column(db.DateTime)  # Ensure this is correctly set to DateTime

    # Relationships
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

    user = db.relationship('User', back_populates="tasks")  # Changed from users to user
    project = db.relationship('Project', back_populates="tasks")  # Fixed relationship

    # Many-to-Many relationship with Category via TaskCategory
    categories = db.relationship('TaskCategory', back_populates="task")

    def __repr__(self):
        return f'Task {self.title}, {self.description}, {self.status}, {self.due_date}'

# Category Model (added by you)
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)

    # Relationship with TaskCategory (Many-to-Many via TaskCategory)
    tasks = db.relationship('TaskCategory', back_populates="category")

    def __repr__(self):
        return f'<Category {self.name}>'

# TaskCategory Model (Join table for Task and Category)
class TaskCategory(db.Model, SerializerMixin):
    __tablename__ = 'task_categories'

    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    priority = db.Column(db.String(50), nullable=True)

    # Relationships
    task = db.relationship('Task', back_populates='categories')
    category = db.relationship('Category', back_populates='tasks')

    def __repr__(self):
        return f'<TaskCategory TaskID: {self.task_id}, CategoryID: {self.category_id}, Priority: {self.priority}>'
