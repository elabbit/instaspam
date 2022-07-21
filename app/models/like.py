from .db import db

likes = db.Table(
    'likes',
    db.Model.metadata,
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('postId', db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)
