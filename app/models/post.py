from .db import db
from .like import likes
from sqlalchemy.sql import func
from sqlalchemy import DateTime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    caption = db.Column(db.String(1000), nullable=True)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    owner = db.relationship("User", back_populates="owner_posts")
    post_comments = db.relationship("Comment", back_populates="post_id")
    post_likes = db.relationship("User",
        secondary=likes,
        back_populates="user_likes",
        cascade='all, delete'
    )
