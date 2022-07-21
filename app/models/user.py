from codecs import backslashreplace_errors
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import likes


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profileImage = db.Column(db.String(500), nullable=True, default="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph-1200x1199.png")
    bio = db.Column(db.String(1000), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    owner_posts = db.relationship("Post", back_populates="owner")
    user_comments = db.relationship("Comment", back_populates="user_id")
    user_likes = db.relationship("Post",
        secondary=likes,
        back_populates="post_likes",
        cascade="all, delete"
    )



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'name': self.name,
            'email': self.email,
            'profileImage': self.profileImage,
            'bio': self.bio
        }
