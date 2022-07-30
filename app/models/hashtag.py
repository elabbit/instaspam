from .db import db
from .tag import tags

class Hashtag(db.Model):
    __tablename__ = 'hashtags'

    id = db.Column(db.Integer, primary_key=True)
    hashtag = db.Column(db.String(100), nullable=False)

    posts_with_hashtag = db.relationship("Post",
        secondary=tags,
        back_populates="hashtags_on_post",
    )


    def to_dict_no_posts(self):
        return {
            'id': self.id,
            'hashtag': self.hashtag,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'hashtag': self.hashtag,
            'postIds': [post.to_dict_hashtags() for post in self.posts_with_hashtag]
        }
