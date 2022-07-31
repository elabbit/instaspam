from app.api.auth_routes import validation_errors_to_error_messages
from app.forms.editcomment_form import EditCommentForm
from flask import Blueprint, request
from flask_login import current_user
from ..models import db, Comment
from app.forms.createcomment_form import CreateCommentForm


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/new', methods=['POST'])
def add_comments():
    # comment = Comment(userId=current_user.id, postId=request.form.get('postId') , comment = request.form.get('commentBody'))
    # db.session.add(comment)
    # db.session.commit()
    form = CreateCommentForm()
    print(form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            userId=current_user.id,
            postId=form.data['postId'],
            comment=form.data['commentBody']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401




@comment_routes.route('/<int:commentId>', methods=['DELETE'])
def delete_comments(commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()

    return f'{commentId}'

@comment_routes.route('/<int:commentId>', methods=['PUT'])
def edit_comments(commentId):
    comment = Comment.query.get(commentId)

    form = EditCommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment.comment = form.data['commentBody']
        db.session.commit()
        return comment.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)}, 401
