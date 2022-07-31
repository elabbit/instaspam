from codecs import backslashreplace_errors
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import likes
from .follow import follows


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profileImage = db.Column(db.String(500), nullable=True, default="https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicDefault.png")
    bio = db.Column(db.String(1000), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    owner_posts = db.relationship("Post", back_populates="owner")
    user_comments = db.relationship("Comment", back_populates="user_id")
    user_likes = db.relationship("Post",
        secondary=likes,
        back_populates="post_likes",
        cascade="all, delete"
    )
    followed = db.relationship(
        'User', secondary=follows,
        primaryjoin=(follows.c.userId == id),
        secondaryjoin=(follows.c.followingId == id),
        backref=db.backref('follows', lazy='dynamic'), lazy='dynamic')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def is_following(self, user):
        return self.followed.filter(
            follows.c.followingId == user.id).count() > 0

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profileImage': self.profileImage,
            'bio': self.bio,
        }

    def to_dict_user_page(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profileImage': self.profileImage,
            'bio': self.bio,
            'following': [x.to_dict_follows() for x in self.followed],
            'followers': [x.to_dict_follows() for x in self.follows],
        }

    def to_dict_follows(self):
        return {
            'name': self.name,
            'username': self.username,
            'profileImage': self.profileImage,
            'id': self.id
        }
