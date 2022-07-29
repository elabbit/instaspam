from .db import db

tags = db.Table(
    'tags',
    db.Model.metadata,
    db.Column('postId', db.Integer, db.ForeignKey('posts.id'), primary_key=True),
    db.Column('hashtagId', db.Integer, db.ForeignKey('hashtags.id'), primary_key=True)
)
