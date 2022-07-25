from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Post, User, follows
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


@post_routes.route('/feed/<int:userId>')
@login_required
def get_following_posts(userId):
    followers_posts = Post.query.join(
        follows, (follows.c.followingId == Post.ownerId)).filter(
            follows.c.userId == userId
        ).order_by(
            Post.id.desc()).all()

    spam_posts = Post.query.filter_by(ownerId=2).order_by(Post.id.desc()).all()

    combined_posts = followers_posts + spam_posts

    print('------------------------------------------',followers_posts, "----------------------------------------------")


    posts = [ post.to_dict() for post in combined_posts ]
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

@post_routes.route('/<int:postId>/delete', methods=['DELETE'])
@login_required
def delete_post(postId):
    deleted_post = Post.query.get(postId)
    db.session.delete(deleted_post)
    db.session.commit()
    return f'{postId}'



@post_routes.route('/like/<int:postId>', methods=['PUT'])
@login_required
def like(postId):
    post = Post.query.get(postId)
    post.like(current_user)
    db.session.commit()
    return post.to_dict()


@post_routes.route('/unlike/<int:postId>', methods=['PUT'])
@login_required
def unlike(postId):
    post = Post.query.get(postId)
    post.unlike(current_user)
    db.session.commit()
    return post.to_dict()
