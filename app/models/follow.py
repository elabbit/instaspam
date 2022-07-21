from .db import db

follows = db.Table(
    'follows',
    db.Model.metadata,
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('followingId', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)
