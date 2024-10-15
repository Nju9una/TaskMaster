from app import app
from models import db, Project, Task


with app.app_context():
    print("deleting seeding................")

    Project.query.delete()
    Task.query.delete()

    print("Creating users...")