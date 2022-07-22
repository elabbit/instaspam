from flask import Blueprint
from flask_login import login_required
from ..models import Post

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:userId>')
@login_required
def get_posts_by_userId(userId):
    # print(id)
    print(userId)
    # user_posts = Post.query.filter(Post.ownerId).all()
    user_posts = Post.query.filter(Post.ownerId==userId).all()
    posts = [ post.to_dict() for post in user_posts ]
    print("USER POSTS-----------------" , posts)
    return {'user_posts': posts}
