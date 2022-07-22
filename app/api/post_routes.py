from random import choice, random
from flask import Blueprint
from flask_login import login_required
from ..models import Post
from sqlalchemy.sql.expression import func

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:userId>')
@login_required
def get_posts_by_userId(userId):
    # print(userId)
    user_posts = Post.query.filter(Post.ownerId==userId).all()
    posts = [ post.to_dict() for post in user_posts ]
    # print("USER POSTS-----------------" , posts)
    return {'user_posts': posts}

@post_routes.route('/feed/<int:userId>')
@login_required
def get_following_posts(userId):
    # print(id)
    print(userId)
    # user_posts = Post.query.filter(Post.ownerId).all()
    user_posts = Post.query.filter(Post.ownerId==userId).all()
    posts = [ post.to_dict() for post in user_posts ]
    print("USER POSTS-----------------" , posts)
    return {'user_posts': posts}

@post_routes.route('/explore/<int:userId>')
@login_required
def get_explore_posts(userId):
    # print(id)
    # print(userId)
    # user_posts = Post.query.filter(Post.ownerId).all()
    user_posts = Post.query.filter(Post.ownerId!=userId).order_by(func.random()).limit(15)
    posts = [ post.to_dict() for post in user_posts ]
    print("USER POSTS-----------------" , posts)
    return {'user_posts': posts}
