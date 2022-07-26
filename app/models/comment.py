from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime
from .user import User

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    comment = db.Column(db.String(1000), nullable=True)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    user_id = db.relationship("User", back_populates="user_comments")
    post_id = db.relationship("Post", back_populates="post_comments")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'comment': self.comment,
            'createdAt': self.createdAt,
            'username': User.query.get(self.userId).username,
            'userProfileImage': User.query.get(self.userId).profileImage
        }
