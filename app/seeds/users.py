from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo', name='Demo User', email='demo@email.com', bio="I'm a demo user.", password='password')
    spam = User(
        username='spam', name='SPAM brand', email='spam@email.com', profileImage='https://cdn.shopify.com/s/files/1/0670/6431/products/37891FLAT_1200x1200.jpg?v=1579623155', bio="Sizzle Pork And Mmm. Don't knock it 'til you've fried it.", password='password')
    user3 = User(
        username='hoopa24', name='David Chung', email='davidc@email.com', profileImage='https://www.si.com/.image/t_share/MTcwMDIzMjI4NTk1NTEyOTA1/001064236final.jpg', bio="Grind don't stop.", password='password')
    user4 = User(
        username="nc_beststate", name="Abel", email="abel@nc.com", profileImage="https://edtrust.org/wp-content/uploads/2014/09/nc.png", bio="The best views from the best state", password="password")
    user5 = User(
        username="lucky_doge", name="Lucky", email="Luckry@gmail.com", profileImage="https://images7.alphacoders.com/423/thumb-1920-423557.jpg", bio="I am Lucky the doggo", password="password")
    user6 = User(
        username='labbit', name='Eddie Lau', email='labbit@email.com', profileImage='https://cdn.shopify.com/s/files/1/0584/3841/products/fiberglass-stache-labbit-stool-5_608x608.jpg?v=1594543878', bio="Live. Lau. Love.", password='password')


    db.session.add(demo)
    db.session.add(spam)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
