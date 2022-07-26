from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class CreateCommentForm(FlaskForm):
    postId = IntegerField('postId')
    commentBody = StringField('commentBody', validators=[DataRequired()])
