from flask_wtf import FlaskForm
from wtforms import StringField

class EditPostForm(FlaskForm):
    caption = StringField('caption')
