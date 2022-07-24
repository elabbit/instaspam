from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Post, User
from sqlalchemy.sql.expression import func
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<username>')
@login_required
def get_posts_by_userId(username):
    user = User.query.filter_by(username=username).first()
    user_posts = Post.query.filter(Post.ownerId==user.id).all()
    posts = [ post.to_dict() for post in user_posts ]
    return {'user_posts': posts}

# Need to wait for Eddie and Abel to_dict for users in order to get followers.
@post_routes.route('/feed/<int:userId>')
@login_required
def get_following_posts(userId):
    user_posts = Post.query.filter(Post.ownerId==userId).all()
    posts = [ post.to_dict() for post in user_posts ]
    return {'user_posts': posts}

@post_routes.route('/explore/<int:userId>')
@login_required
def get_explore_posts(userId):
    user_posts = Post.query.filter(Post.ownerId!=userId).filter(Post.id>9).order_by(func.random()).limit(15)
    posts = [ post.to_dict() for post in user_posts ]
    return {'user_posts': posts}

@post_routes.route('/new', methods=['POST'])
@login_required
def add_new_post():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    new_post = Post(ownerId=current_user.id, image=url, caption=request.form.get('caption'))

    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict()


@post_routes.route('/edit', methods=['PUT'])
@login_required
def edit_post():
    edited_post = Post.query.get(request.form.get('postId'))
    edited_post.caption = request.form.get('caption')
    db.session.commit()

    return edited_post.to_dict()
