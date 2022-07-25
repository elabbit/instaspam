from flask import Blueprint, request
from flask_login import current_user, login_required
from app.forms.empty_form import EmptyForm
from ..models import db, User

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/<int:userId>', methods=['PUT'])
@login_required
def follow_user(userId):
    user = User.query.get(userId)
    current_user.follow(user)
    db.session.commit()
    return user.to_dict_user_page()


@follow_routes.route('/unfollow/<int:userId>', methods=['PUT'])
@login_required
def unfollow_user(userId):
    user= User.query.get(userId)
    current_user.unfollow(user)
    print('USER!!!!!!!!!!!!!',user)
    db.session.commit()
    return user.to_dict_user_page()
