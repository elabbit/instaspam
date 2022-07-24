from .db import db
from .like import likes
from sqlalchemy.sql import func
from sqlalchemy import DateTime
from .user import User

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

    def like(self, user):
        if not self.is_liking(user):
            self.post_likes.append(user)

    def unlike(self, user):
        if self.is_liking(user):
            self.post_likes.remove(user)

    def is_liking(self, user):
        postlikes_ids = [x.id for x in self.post_likes]
        return user.id in postlikes_ids


    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'image': self.image,
            'caption': self.caption,
            'createdAt': self.createdAt,
            'comments': [ comment.to_dict() for comment in self.post_comments ],
            'likes': [user.to_dict_follows() for user in self.post_likes],
            'ownerUsername': User.query.get(self.ownerId).username
        }
