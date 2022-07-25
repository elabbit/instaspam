from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class PostEditForm(FlaskForm):
    caption = StringField('caption', validators=[DataRequired()])
