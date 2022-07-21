from app.models import db, Like

def seed_likes():

    like1 = Like(
    userId=1, postId=10
    )
    like2 = Like(
    userId=3, postId=10
    )
    like3 = Like(
    userId=4, postId=10
    )
    like4 = Like(
    userId=5, postId=10
    )
    like5 = Like(
    userId=6, postId=10
    )
    like6 = Like(
    userId=1, postId=11
    )
    like7 = Like(
    userId=3, postId=11
    )
    like8 = Like(
    userId=4, postId=11
    )
    like9 = Like(
    userId=5, postId=11
    )
    like10 = Like(
    userId=1, postId=12
    )
    like11 = Like(
    userId=4, postId=12
    )
    like12 = Like(
    userId=6, postId=12
    )
    like13 = Like(
    userId=1, postId=14
    )
    like14 = Like(
    userId=3, postId=14
    )
    like15 = Like(
    userId=5, postId=14
    )
    like16 = Like(
    userId=6, postId=14
    )
    like17 = Like(
    userId=4, postId=15
    )
    like18 = Like(
    userId=5, postId=15
    )
    like19 = Like(
    userId=3, postId=16
    )
    like20 = Like(
    userId=6, postId=16
    )
    like21 = Like(
    userId=1, postId=16
    )
    like22 = Like(
    userId=3, postId=17
    )
    like23 = Like(
    userId=4, postId=17
    )
    like24 = Like(
    userId=5, postId=17
    )
    like25 = Like(
    userId=1, postId=18
    )
    like26 = Like(
    userId=3, postId=18
    )
    like27= Like(
    userId=4, postId=18
    )
    like28 = Like(
    userId=5, postId=18
    )
    like29 = Like(
    userId=6, postId=18
    )
    like30 = Like(
    userId=1, postId=20
    )
    like31 = Like(
    userId=1, postId=21
    )
    like32 = Like(
    userId=3, postId=21
    )
    like33 = Like(
    userId=6, postId=22
    )
    like34 = Like(
    userId=5, postId=22
    )
    like35 = Like(
    userId=4, postId=23
    )
    like36 = Like(
    userId=5, postId=23
    )
    like37 = Like(
    userId=6, postId=23
    )
    like38 = Like(
    userId=1, postId=24
    )
    like39 = Like(
    userId=3, postId=24
    )
    like40 = Like(
    userId=4, postId=24
    )
    like41 = Like(
    userId=5, postId=24
    )
    like42 = Like(
    userId=6, postId=24
    )
    like43 = Like(
    userId=6, postId=26
    )
    like44 = Like(
    userId=3, postId=27
    )
    like45 = Like(
    userId=5, postId=27
    )
    like46 = Like(
    userId=1, postId=28
    )
    like47 = Like(
    userId=3, postId=28
    )
    like48 = Like(
    userId=4, postId=28
    )
    like49 = Like(
    userId=5, postId=28
    )
    like50 = Like(
    userId=6, postId=28
    )
    like51 = Like(
    userId=5, postId=29
    )
    like52 = Like(
    userId=4, postId=30
    )
    like53 = Like(
    userId=5, postId=30
    )
    like54 = Like(
    userId=3, postId=31
    )
    like55 = Like(
    userId=4, postId=31
    )
    like56 = Like(
    userId=5, postId=31
    )
    like57 = Like(
    userId=6, postId=31
    )
    like58 = Like(
    userId=1, postId=32
    )
    like59 = Like(
    userId=3, postId=32
    )
    like60 = Like(
    userId=5, postId=32
    )
    like61 = Like(
    userId=6, postId=32
    )
    like62 = Like(
    userId=4, postId=33
    )
    like63 = Like(
    userId=1, postId=35
    )
    like64 = Like(
    userId=3, postId=36
    )
    like65 = Like(
    userId=6, postId=37
    )
    like66 = Like(
    userId=5, postId=37
    )
    like67 = Like(
    userId=4, postId=37
    )
    like68 = Like(
    userId=3, postId=39
    )
    like69 = Like(
    userId=5, postId=39
    )
    like70 = Like(
    userId=6, postId=39
    )
    like71 = Like(
    userId=1, postId=40
    )
    like72 = Like(
    userId=3, postId=40
    )
    like73 = Like(
    userId=4, postId=40
    )
    like74 = Like(
    userId=5, postId=40
    )
    like75 = Like(
    userId=6, postId=40
    )
    like76 = Like(
    userId=1, postId=42
    )
    like77 = Like(
    userId=3, postId=42
    )
    like78 = Like(
    userId=4, postId=42
    )
    like79 = Like(
    userId=5, postId=42
    )
    like80 = Like(
    userId=6, postId=42
    )
    like81 = Like(
    userId=5, postId=43
    )
    like82 = Like(
    userId=6, postId=43
    )
    like83 = Like(
    userId=1, postId=44
    )
    like84 = Like(
    userId=3, postId=44
    )
    like85 = Like(
    userId=5, postId=44
    )
    like86 = Like(
    userId=6, postId=44
    )
    like87 = Like(
    userId=1, postId=45
    )
    like88 = Like(
    userId=4, postId=45
    )
    like89 = Like(
    userId=5, postId=45
    )
    like90 = Like(
    userId=6, postId=45
    )

    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    db.session.add(like5)
    db.session.add(like6)
    db.session.add(like7)
    db.session.add(like8)
    db.session.add(like9)
    db.session.add(like10)
    db.session.add(like11)
    db.session.add(like12)
    db.session.add(like13)
    db.session.add(like14)
    db.session.add(like15)
    db.session.add(like16)
    db.session.add(like17)
    db.session.add(like18)
    db.session.add(like19)
    db.session.add(like20)
    db.session.add(like21)
    db.session.add(like22)
    db.session.add(like23)
    db.session.add(like24)
    db.session.add(like25)
    db.session.add(like26)
    db.session.add(like27)
    db.session.add(like28)
    db.session.add(like29)
    db.session.add(like30)
    db.session.add(like31)
    db.session.add(like32)
    db.session.add(like33)
    db.session.add(like34)
    db.session.add(like35)
    db.session.add(like36)
    db.session.add(like37)
    db.session.add(like38)
    db.session.add(like39)
    db.session.add(like40)
    db.session.add(like41)
    db.session.add(like42)
    db.session.add(like43)
    db.session.add(like44)
    db.session.add(like45)
    db.session.add(like46)
    db.session.add(like47)
    db.session.add(like48)
    db.session.add(like49)
    db.session.add(like50)
    db.session.add(like51)
    db.session.add(like52)
    db.session.add(like53)
    db.session.add(like54)
    db.session.add(like55)
    db.session.add(like56)
    db.session.add(like57)
    db.session.add(like58)
    db.session.add(like59)
    db.session.add(like60)
    db.session.add(like61)
    db.session.add(like62)
    db.session.add(like63)
    db.session.add(like64)
    db.session.add(like65)
    db.session.add(like66)
    db.session.add(like67)
    db.session.add(like68)
    db.session.add(like69)
    db.session.add(like70)
    db.session.add(like71)
    db.session.add(like72)
    db.session.add(like73)
    db.session.add(like74)
    db.session.add(like75)
    db.session.add(like76)
    db.session.add(like77)
    db.session.add(like78)
    db.session.add(like79)
    db.session.add(like80)
    db.session.add(like81)
    db.session.add(like82)
    db.session.add(like83)
    db.session.add(like84)
    db.session.add(like85)
    db.session.add(like86)
    db.session.add(like87)
    db.session.add(like88)
    db.session.add(like89)
    db.session.add(like90)

    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
