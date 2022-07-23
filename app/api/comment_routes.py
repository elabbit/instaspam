from flask import Blueprint, request
from flask_login import current_user
from ..models import db, Comment



comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/new', methods=['POST'])
def add_comments():
    comment = Comment(userId=current_user.id, postId=request.form.get('postId') , comment = request.form.get('commentBody'))

    db.session.add(comment)
    db.session.commit()

    return comment.to_dict()
