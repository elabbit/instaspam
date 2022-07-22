from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class NewPostForm(FlaskForm):
    ownerId = StringField('ownerId', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
    caption = StringField('caption')
