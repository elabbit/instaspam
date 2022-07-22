from flask.cli import AppGroup
from .mainSeeder import seed_all, undo_all
from .comments import seed_comments, undo_comments


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_all()
    seed_comments()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_all()
    undo_comments()
