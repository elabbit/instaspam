from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        userId=4,
        postId=10,
        comment='That place looks so cool!'
    )
    comment2 = Comment(
        userId=5,
        postId=10,
        comment='Oh snap where is that??? I definitely need to visit',
    )
    comment3 = Comment(
        userId=6,
        postId=11,
        comment='For real man, Kobe was the reason I fell in love with basketball. One of the GOATs for sure.',
    )
    comment4 = Comment(
        userId=4,
        postId=11,
        comment='Kobe and his work ethic were the epitome of dedication- there was no one who spent more time perfecting their craft.',
    )
    comment5 = Comment(
        userId=5,
        postId=12,
        comment='That dog is adorable, I want to pet it so bad!!!',
    )
    comment6 = Comment(
        userId=6,
        postId=12,
        comment='SO FLUFFYYYYYYYY!!!',
    )
    comment7 = Comment(
        userId=4,
        postId=13,
        comment='That food looks SO GOOD. I want some',
    )
    comment8 = Comment(
        userId=5,
        postId=13,
        comment='Bro is it just me or is everyone getting hungry too??',
    )
    comment9 = Comment(
        userId=6,
        postId=14,
        comment="Puttin' in that WORK",
    )
    comment10 = Comment(
        userId=4,
        postId=14,
        comment="Grind don't stop!",
    )
    comment11 = Comment(
        userId=5,
        postId=15,
        comment="Dude you're killing it out here!",
    )
    comment12 = Comment(
        userId=6,
        postId=15,
        comment='Mans got some serious skills!',
    )
    comment13 = Comment(
        userId=4,
        postId=16,
        comment='Dude where is that??? So lucky!!!',
    )
    comment14 = Comment(
        userId=5,
        postId=17,
        comment='F1 racing is so underrated in the states.',
    )
    comment15 = Comment(
        userId=6,
        postId=18,
        comment='I NEED to see this at least once in my lifetime. So beautiful.',
    )
    comment16 = Comment(
        userId=3,
        postId=19,
        comment='Agreed best city in America!',
    )
    comment17 = Comment(
        userId=6,
        postId=19,
        comment='Would love to move here. Looks beautiful',
    )
    comment18 = Comment(
        userId=5,
        postId=20,
        comment='Beautiful sunset!',
    )
    comment19 = Comment(
        userId=6,
        postId=20,
        comment='Mountains look great. Would love to go climbing here',
    )
    comment20 = Comment(
        userId=3,
        postId=21,
        comment='Great picture of the waves coming in on the beach',
    )
    comment21 = Comment(
        userId=6,
        postId=21,
        comment='Life is a beach',
    )
    comment22 = Comment(
        userId=5,
        postId=22,
        comment='Go TarHeels!!',
    )
    comment23 = Comment(
        userId=3,
        postId=22,
        comment='Congrats to UNC!!',
    )
    comment24 = Comment(
        userId=3,
        postId=23,
        comment='Great looking bird, love the bright red',
    )
    comment25 = Comment(
        userId=5,
        postId=23,
        comment='Great pic! Cardinal in its natural habitat',
    )
    comment26 = Comment(
        userId=5,
        postId=24,
        comment='Surprised Raleigh is the capital, seems like it should be Charlotte',
    )
    comment27 = Comment(
        userId=3,
        postId=24,
        comment='Raleigh looks cool, will visit one day',
    )
    comment28 = Comment(
        userId=6,
        postId=25,
        comment='Great find in the mountains',
    )
    comment29 = Comment(
        userId=3,
        postId=25,
        comment='Leaves look amazing around the lake, maybe will go for a swim?',
    )
    comment30 = Comment(
        userId=5,
        postId=26,
        comment='That place is huge, would love to live there',
    )
    comment31 = Comment(
        userId=3,
        postId=28,
        comment='Lorem ipsum dolor sit amet'
    )
    comment32 = Comment(
        userId=4,
        postId=28,
        comment='consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
    comment33 = Comment(
        userId=1,
        postId=28,
        comment='Ut enim ad minim veniam, quis nostrud exercitation'
    )
    comment34 = Comment(
        userId=1,
        postId=28,
        comment='ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    )
    comment35 = Comment(
        userId=6,
        postId=30,
        comment='Duis aute irure dolor in reprehenderit in voluptate'
    )
    comment36 = Comment(
        userId=4,
        postId=30,
        comment='Excepteur sint occaecat cupidatat non proident'
    )
    comment37 = Comment(
        userId=2,
        postId=31,
        comment='sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )
    comment38 = Comment(
        userId=2,
        postId=32,
        comment='Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.'
    )
    comment39 = Comment(
        userId=3,
        postId=33,
        comment='Dolor magna eget est lorem ipsum dolor. Volutpat est velit egestas dui id ornare arcu.'
    )
    comment40 = Comment(
        userId=2,
        postId=33,
        comment='Viverra nam libero justo laoreet sit amet cursus.'
    )
    comment41 = Comment(
        userId=1,
        postId=34,
        comment='Erat nam at lectus urna duis. Non odio euismod lacinia at quis risus.'
    )
    comment42 = Comment(
        userId=4,
        postId=34,
        comment='Tincidunt lobortis feugiat vivamus at augue eget arcu.'
    )
    comment43 = Comment(
        userId=4,
        postId=35,
        comment='Consectetur adipiscing elit ut aliquam.'
    )
    comment44 = Comment(
        userId=2,
        postId=35,
        comment='Lacinia quis vel eros donec. Id faucibus nisl tincidunt eget nullam non nisi est sit.'
    )
    comment45 = Comment(
        userId=6,
        postId=35,
        comment='Tortor id aliquet lectus proin nibh nisl condimentum. Quis risus sed vulputate odio ut enim blandit volutpat.'
    )

    comment46 = Comment(
        userId=3,
        postId=37,
        comment='Just revolutionary mate',
    )
    comment47 = Comment(
        userId=4,
        postId=37,
        comment='Such nice.',
    )
    comment48 = Comment(
        userId=4,
        postId=38,
        comment='Extra fab!!',
    )
    comment49 = Comment(
        userId=3,
        postId=39,
        comment='Such notification, many shape, so engaging',
    )
    comment50 = Comment(
        userId=5,
        postId=39,
        comment='This design blew my mind.',
    )
    comment51 = Comment(
        userId=3,
        postId=40,
        comment="I think I'm crying. It's that excellent.",
    )
    comment52 = Comment(
            userId=5,
            postId=40,
            comment='Looks simple and radiant, friend.',
    )
    comment53 = Comment(
            userId=4,
            postId=41,
            comment='Highly classic shot =D',
    )
    comment54 = Comment(
            userId=5,
            postId=42,
            comment='YEW!',
    )
    comment55 = Comment(
            userId=3,
            postId=42,
            comment='Amazing shot mate',
    )
    comment56 = Comment(
            userId=4,
            postId=43,
            comment='Looks excellent and alluring :-D',
    )
    comment57 = Comment(
            userId=5,
            postId=43,
            comment='Amazing. So splendid.',
    )
    comment58 = Comment(
            userId=5,
            postId=44,
            comment="Mission accomplished. It's excellent m8",
    )
    comment59 = Comment(
            userId=4,
            postId=45,
            comment='Congrats on the new adventure!!',
    )
    comment60 = Comment(
            userId=3,
            postId=45,
            comment='Such strong.',
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.add(comment28)
    db.session.add(comment29)
    db.session.add(comment30)
    db.session.add(comment31)
    db.session.add(comment32)
    db.session.add(comment33)
    db.session.add(comment34)
    db.session.add(comment35)
    db.session.add(comment36)
    db.session.add(comment37)
    db.session.add(comment38)
    db.session.add(comment39)
    db.session.add(comment40)
    db.session.add(comment41)
    db.session.add(comment42)
    db.session.add(comment43)
    db.session.add(comment44)
    db.session.add(comment45)
    db.session.add(comment46)
    db.session.add(comment47)
    db.session.add(comment48)
    db.session.add(comment49)
    db.session.add(comment50)
    db.session.add(comment51)
    db.session.add(comment52)
    db.session.add(comment53)
    db.session.add(comment54)
    db.session.add(comment55)
    db.session.add(comment56)
    db.session.add(comment57)
    db.session.add(comment58)
    db.session.add(comment59)
    db.session.add(comment60)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
