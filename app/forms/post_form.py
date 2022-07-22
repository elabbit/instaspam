from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class NewPostForm(FlaskForm):
    ownerId = StringField('ownerId', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
    caption = StringField('caption')
    submit = SubmitField('Submit')
