from flask import Blueprint, request
from flask_login import current_user
from app.forms.empty_form import EmptyForm
from ..models import db, User

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/follows/<int:userId>', methods=['POST'])
def follow_user(userId):
    form = EmptyForm()
    if form.validate_on_submit():
        user = User.query.get(userId)
        current_user.follow(user)
        db.session.commit
        return 'Followed'
    return 'Followed'

@follow_routes.route('/unfollow/<int:userId>', methods=['POST'])
def unfollow_user(userId):
    form = EmptyForm()
    if form.validate_on_submit():
        user= User.query.get(userId)
        current_user.unfollow(user)
        db.session.commit
        return '1'
    return '1'
