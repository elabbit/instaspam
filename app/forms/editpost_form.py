from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EditPostForm(FlaskForm):
    caption = StringField('caption', validators=[DataRequired()])
