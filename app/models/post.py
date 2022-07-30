from .db import db
from .like import likes
from .tag import tags
from sqlalchemy.sql import func
from sqlalchemy import DateTime
from .user import User
from .hashtag import Hashtag

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    caption = db.Column(db.String(1000), nullable=True)
    createdAt = db.Column(DateTime(timezone=True), server_default=func.now())

    owner = db.relationship("User", back_populates="owner_posts")
    post_comments = db.relationship("Comment", back_populates="post_id",cascade="all, delete")
    post_likes = db.relationship("User",
        secondary=likes,
        back_populates="user_likes"
    )
    hashtags_on_post = db.relationship("Hashtag",
        secondary=tags,
        back_populates="posts_with_hashtag"
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

    def add_hashtag(self, hashtag):
        if hashtag not in self.hashtags_on_post:
            self.hashtags_on_post.append(hashtag)

    def remove_hashtag(self, hashtag):
        if hashtag in self.hashtags_on_post:
            self.hashtags_on_post.remove(hashtag)

    def all_hashtags(self):
        all_hashtag_objs = [hashtag_obj.to_dict_no_posts() for hashtag_obj in self.hashtags_on_post]
        all_hashtags = [hashtag['hashtag'] for hashtag in all_hashtag_objs]
        return all_hashtags

    def check_hashtags(self):
        if self.caption:
            words = self.caption.split(' ')

            nonexistent_hashtags = []
            current_hashtags = []

            for word in words:
                tag = word[1:].lower()

                if word[0] == '#':
                    exists = Hashtag.query.filter_by(hashtag=tag).first()
                    current_hashtags.append(tag)

                    if exists is None:
                        nonexistent_hashtags.append(tag)


            return [nonexistent_hashtags, current_hashtags]

    def to_dict_hashtags(self):
        return {
            'id': self.id,
        }


    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'image': self.image,
            'caption': self.caption,
            'createdAt': self.createdAt,
            'comments': [ comment.to_dict() for comment in self.post_comments ],
            'likes': [user.to_dict_follows() for user in self.post_likes],
            'hashtags': [hashtag.to_dict_no_posts() for hashtag in self.hashtags_on_post],
            'ownerUsername': User.query.get(self.ownerId).username,
            'ownerProfileImage': User.query.get(self.ownerId).profileImage
        }
