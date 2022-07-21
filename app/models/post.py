from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(500), nullable=False)
    caption = db.Column(db.String(1000), nullable=True)
