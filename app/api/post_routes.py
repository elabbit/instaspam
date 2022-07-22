from flask import Blueprint
from flask_login import login_required
from ..models import Post

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:userId>')
@login_required
def get_posts_by_userId(userId):
    # print(id)
    print(userId)
    user_posts = Post.query.get(userId).all()
    # print(one_joke.to_dict())
    print("USER POSTS-----------------" , user_posts)
    return user_posts
