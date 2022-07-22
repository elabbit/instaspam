from app.models import db, follow

def seed_follows():
    follow1 = follow.insert().values(
        userId=1, followingId=3
    )
    follow2 = follow.insert().values(
        userId=1, followingId=4
    )
    follow3 = follow.insert().values(
        userId=1, followingId=5
    )
    follow4 = follow.insert().values(
        userId=1, followingId=6
    )
    follow5 = follow.insert().values(
        userId=3, followingId=1
    )
    follow6 = follow.insert().values(
        userId=3, followingId=4
    )
    follow7 = follow.insert().values(
        userId=3, followingId=5
    )
    follow8 = follow.insert().values(
        userId=3, followingId=6
    )
    follow9 = follow.insert().values(
        userId=4, followingId=1
    )
    follow10 = follow.insert().values(
        userId=4, followingId=3
    )
    follow11 = follow.insert().values(
        userId=4, followingId=5
    )
    follow12= follow.insert().values(
        userId=4, followingId=6
    )
    follow13 = follow.insert().values(
        userId=6, followingId=1
    )
    follow14 = follow.insert().values(
        userId=6, followingId=3
    )
    follow15 = follow.insert().values(
        userId=6, followingId=4
    )
    follow16 = follow.insert().values(
        userId=6, followingId=5
    )

    db.session.execute(follow1)
    db.session.commit()
    db.session.execute(follow2)
    db.session.commit()
    db.session.execute(follow3)
    db.session.commit()
    db.session.execute(follow4)
    db.session.commit()
    db.session.execute(follow5)
    db.session.commit()
    db.session.execute(follow6)
    db.session.commit()
    db.session.execute(follow7)
    db.session.commit()
    db.session.execute(follow8)
    db.session.commit()
    db.session.execute(follow9)
    db.session.commit()
    db.session.execute(follow10)
    db.session.commit()
    db.session.execute(follow11)
    db.session.commit()
    db.session.execute(follow12)
    db.session.commit()
    db.session.execute(follow13)
    db.session.commit()
    db.session.execute(follow14)
    db.session.commit()
    db.session.execute(follow15)
    db.session.commit()
    db.session.execute(follow16)
    db.session.commit()
