from flask_wtf import FlaskForm
from wtforms import FileField, StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError


def file_checker(form, field):
    image = field.data
    print('---------image---------', image)


class PostForm(FlaskForm):
    image = FileField('image', validators=[DataRequired(), file_checker])
    caption = StringField('caption')
    submit = SubmitField('Submit')
