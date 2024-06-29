from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from config import db

# Assuming you have already set up Flask and SQLAlchemy as you've shown earlier

# Define your SQLAlchemy model for the membership form
class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=True)
    street_address = db.Column(db.String(100), nullable=True)
    address_line_2 = db.Column(db.String(100), nullable=True)
    city = db.Column(db.String(50), nullable=True)
    state = db.Column(db.String(50), nullable=True)
    zip_code = db.Column(db.String(20), nullable=True)
    special_notes = db.Column(db.Text, nullable=True)
    date_joined = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Member('{self.first_name}', '{self.last_name}', '{self.email}')"
