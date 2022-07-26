from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict_user_page() for user in users]}


@user_routes.route('<username>')
@login_required
def user(username):
    try:
        user = User.query.filter_by(username=username).first()
        return user.to_dict_user_page()
    except:
            return {'errors': 'User does not exist'}, 404
