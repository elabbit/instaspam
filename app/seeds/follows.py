from app.models import db, Follow

def seed_follows():
    follow1 = Follow(
        userId=1, followingId=3
    )
    follow2 = Follow(
        userId=1, followingId=4
    )
    follow3 = Follow(
        userId=1, followingId=5
    )
    follow4 = Follow(
        userId=1, followingId=6
    )
    follow5 = Follow(
        userId=3, followingId=1
    )
    follow6 = Follow(
        userId=3, followingId=4
    )
    follow7 = Follow(
        userId=3, followingId=5
    )
    follow8 = Follow(
        userId=3, followingId=6
    )
    follow9 = Follow(
        userId=4, followingId=1
    )
    follow10 = Follow(
        userId=4, followingId=3
    )
    follow11 = Follow(
        userId=4, followingId=5
    )
    follow12= Follow(
        userId=4, followingId=6
    )
    follow13 = Follow(
        userId=6, followingId=1
    )
    follow14 = Follow(
        userId=6, followingId=3
    )
    follow15 = Follow(
        userId=6, followingId=4
    )
    follow16= Follow(
        userId=6, followingId=5
    )

    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.add(follow5)
    db.session.add(follow6)
    db.session.add(follow7)
    db.session.add(follow8)
    db.session.add(follow9)
    db.session.add(follow10)
    db.session.add(follow11)
    db.session.add(follow12)
    db.session.add(follow13)
    db.session.add(follow14)
    db.session.add(follow15)
    db.session.add(follow16)







def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()
