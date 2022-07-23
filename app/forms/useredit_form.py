from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

def user_exists(form, field):
    # Checking if user exists
    current = User.query.get(form.data['id'])
    if(field.data == current.email):
        return
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def username_exists(form, field):
    # Checking if username is already in use
    current = User.query.get(form.data['id'])
    if(field.data == current.username):
        return
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def username_format(form, field):
    # Checking if username is already in use
    username = field.data
    spaceIndex = username.find(' ')
    username_lower = username.lower()

    if (spaceIndex != -1 or username != username_lower):
        raise ValidationError('Username neeeds to be lowercase and have no spaces.')

def email_checker(form, field):
    email = field.data
    atIndex = email.find('@')
    dotIndex = email.find('.', atIndex)
    if (atIndex < 0 or dotIndex < 0):
        raise ValidationError('Please enter a valid email address.')



class UserEditForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists, email_checker])
    name = StringField('name', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired(), username_exists, username_format])
    bio = StringField('bio')
    id = IntegerField('id')
