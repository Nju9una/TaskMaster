from app import app
from models import db, User, Project, Task, Category, TaskCategory
from flask_bcrypt import generate_password_hash
from datetime import datetime, timedelta

# Sample data
users_data = [
    {'name': 'Alice', 'email': 'alice@example.com', 'password': 'password123'},
    {'name': 'Bob', 'email': 'bob@example.com', 'password': 'password456'},
    {'name': 'Charlie', 'email': 'charlie@example.com', 'password': 'password789'},
]

projects_data = [
    {'name': 'Project Alpha', 'description': 'Description for Project Alpha'},
    {'name': 'Project Beta', 'description': 'Description for Project Beta'},
]

tasks_data = [
    {
        'title': 'Task 1',
        'description': 'Description for Task 1',
        'status': 'Pending',
        'due_date': datetime.now() + timedelta(days=5),
        'user_id': 1,  # Assuming Alice is user_id 1
        'project_id': 1  # Assuming Project Alpha is project_id 1
    },
    {
        'title': 'Task 2',
        'description': 'Description for Task 2',
        'status': 'In Progress',
        'due_date': datetime.now() + timedelta(days=3),
        'user_id': 2,  # Assuming Bob is user_id 2
        'project_id': 2  # Assuming Project Beta is project_id 2
    },
]

with app.app_context():
    print("Deleting existing data...")
    User.query.delete()
    Project.query.delete()
    Task.query.delete()

    print("Creating users...")
    for user_data in users_data:
        hashed_password = generate_password_hash(user_data['password']).decode('utf-8')
        new_user = User(
            name=user_data['name'],
            email=user_data['email'],
            password=hashed_password
        )
        db.session.add(new_user)

    db.session.commit()

    print("Creating projects...")
    for project_data in projects_data:
        new_project = Project(
            name=project_data['name'],
            description=project_data['description'],
            user_id=1  # Assigning to the first user (Alice)
        )
        db.session.add(new_project)

    db.session.commit()

    print("Creating tasks...")
    for task_data in tasks_data:
        new_task = Task(
            title=task_data['title'],
            description=task_data['description'],
            status=task_data['status'],
            due_date=task_data['due_date'],
            user_id=task_data['user_id'],
            project_id=task_data['project_id']
        )
        db.session.add(new_task)

    db.session.commit()

    print("Seeding complete!")
