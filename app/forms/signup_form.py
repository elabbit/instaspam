from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def username_format(form, field):
    # Checking if username is already in use
    username = field.data
    spaceIndex = username.find(' ')
    username_lower = username.lower()

    if (spaceIndex != -1 or username == username_lower):
        raise ValidationError('Username neeeds to be lowercase and have no spaces.')




class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    name = StringField('name', validators=[DataRequired()])
    username = StringField(
        'username', validators=[DataRequired(), username_exists, username_format])
    password = StringField('password', validators=[DataRequired()])
