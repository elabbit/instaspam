from app.models import db, Post, User


def seed_all():

    demo = User(
        username='demo', name='Demo User', email='demo@email.com', bio="I'm a demo user.", password='password')
    spam = User(
        username='spam', name='SPAM brand', email='spam@email.com', profileImage='https://instaspambucket.s3.us-west-1.amazonaws.com/spam-profile-pic.png', bio="Sizzle Pork And Mmm. Don't knock it 'til you've fried it.", password='password')
    user3 = User(
        username='hoopa24', name='David Chung', email='davidc@email.com', profileImage='https://instaspambucket.s3.us-west-1.amazonaws.com/user3-david-profile-pic.png', bio="Grind don't stop.", password='password')
    user4 = User(
        username="nc_beststate", name="Abel", email="abel@nc.com", profileImage="https://instaspambucket.s3.us-west-1.amazonaws.com/user4-abel-nc-profile-pic.png", bio="The best views from the best state", password="password")
    user5 = User(
        username="lucky_doge", name="Lucky", email="luckry@gmail.com", profileImage="https://instaspambucket.s3.us-west-1.amazonaws.com/user5-LuckyProfile.png", bio="I am Lucky the doggo", password="password")
    user6 = User(
        username='labbit', name='Eddie Lau', email='labbit@email.com', profileImage='https://instaspambucket.s3.us-west-1.amazonaws.com/user6-eddie-profile-pic.png', bio="Live. Lau. Love.", password='password')


    db.session.add(demo)
    db.session.add(spam)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.commit()


    demo.followed.append(user3)
    demo.followed.append(user4)
    demo.followed.append(user5)
    demo.followed.append(user6)
    user3.followed.append(demo)
    user3.followed.append(user4)
    user3.followed.append(user5)
    user3.followed.append(user6)
    user4.followed.append(demo)
    user4.followed.append(user3)
    user4.followed.append(user5)
    user4.followed.append(user6)
    user6.followed.append(demo)
    user6.followed.append(user3)
    user6.followed.append(user4)
    user6.followed.append(user5)

    post1 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image1-spam-classic-12oz-420x420.png',
        caption='The original. The timeless. The spiced hammiest of all SPAM® varieties. This is the taste that started it all back in 1937.',
    )
    post2 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image2-product_spam-with-real-hormel-bacon-12oz-420x420.png',
        caption="We know you're always in the mood for delicious SPAM® products, but what happens when you're also craving bacon? Fear not meat eater, for we have taken the best of both meats and canned it for your consumption!",
    )
    post3 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image3-product-spam-oven-roasted-turkey-12oz-420x420.png',
        caption="This SPAM® variety is made from 100% white, lean turkey. Some folks wonder why we didn't call it SPURKEY.",
    )
    post4 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image4-product-spam-hickory-smoke-12oz-420x420.png',
        caption='If the best thing to come from burning sticks is the bonfire, this is a close second.',
    )
    post5 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image5-spam-hot-and-spicy-12oz-420x420.png',
        caption='Ever wonder what pork would taste like if pigs subsisted on hot peppers?',
    )
    post6 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image6-spam-jalapeno-12oz-420x420.png',
        caption='Treat your taste buds to a fiesta of flavor with lively SPAM® Jalapeño.',
    )
    post7 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image7-spam-teriyaki-12oz-420x420.png',
        caption='To Musubi, or not to musubi, that should not be a question.',
    )
    post8 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image8-spam-portuguese-sausage-12oz-420x420.png',
        caption='"P.S." Have you ever wondered what that stands for at the end of a letter?',
    )
    post9 = Post(
        ownerId=2,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image9-spam-tocino-12oz-420x420.png',
        caption='As a token of our love for this country, we have created a Filipino Flavor — SPAM® Tocino! It has just the right mixture of sweet and meaty to satisfy your craving for Filipino cuisine.',
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.commit()


    post10 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image10-krka-national-park.png',
        caption='Mother Nature at its finest',
        post_likes=[demo, user3, user4, user5, user6]
    )
    post11 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image11-kobe.png',
        caption='To the man who inspired millions, your impact on the game will never be forgotten. RIP Mamba.',
        post_likes=[demo, user3, user4, user5]
    )
    post12 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image12-dogs.png',
        caption="Man's best friend",
        post_likes=[demo, user4, user6]
    )
    post13 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image13-hawaiian-poke-bowl_AFarmgirlsDabbles_AFD-7-sq-735x735.png',
        caption='Always in the mood for poke',
        post_likes=[user5]
    )
    post14 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image14-elderly-sporty-man-running-green-forest-during-morning-workout.png',
        caption='Morning runs are ELITE',
        post_likes=[demo, user3, user5, user6]
    )
    post15 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image15-snowboarder.png',
        caption="Shreddin' some ice",
        post_likes=[user4, user5]
    )
    post16 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image16-hong-kong.png',
        caption='This view never gets old',
        post_likes=[user3, user6, demo]
    )
    post17 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image17-f1-racing.png',
        caption="If you ain't first, you're last.",
        post_likes=[user3, user4, user5]
    )
    post18 = Post(
        ownerId=3,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image18-aurora-borealis.png',
        caption='An unforgettable trip for sure',
        post_likes=[demo, user3, user4, user5, user6]
    )
    post19 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image19.png',
        caption='Beautiful and best city in NC #CharlotteSkyline',
        post_likes=[demo, user3, user4, user5, user6]
    )
    post20 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image20.png',
        caption='Blue Ridge Mountains in NC',
        post_likes=[demo]
    )
    post21 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image21.png',
        caption='Outer Banks beach at sunrise',
        post_likes=[demo, user3]
    )
    post22 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image22.png',
        caption='Best university UNC-Chapel Hill- National Champs!',
        post_likes=[demo, user3, user5, user6]
    )
    post23 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image23.png',
        caption='NCs bird the Red Cardinal',
        post_likes=[user4, user5, user6]
    )
    post24 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image24.png',
        caption='Capital of NC - Raleigh, NC',
        post_likes=[demo, user3, user4, user5, user6]
    )
    post25 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image25.png',
        caption='Lakes at the Great Smoky Mountains',
        post_likes=[user3]
    )
    post26 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image26.png',
        caption='Biltmore Estate near Asheville, NC',
        post_likes=[user6]
    )
    post27 = Post(
        ownerId=4,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image27.png',
        caption='Winter in Asheville, NC',
        post_likes=[user3, user5]
    )
    post28 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image28-Lucky.png',
        caption='Highlights of my photo shoot. This is my favorite headshot.',
        post_likes=[demo, user3, user4, user6]
    )
    post29 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image29-Lucky.png',
        caption="Look how my ears and hair blow in the wind... I look majestic.",
        post_likes=[user3]
    )
    post30 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image30-Lucky.png',
        caption='ゴ ゴ ゴ ゴ ゴ ',
        post_likes=[user4, user6]
    )
    post31 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image31-Lucky.png',
        caption='Relaxing with the new kitten',
        post_likes=[user3, user4, user6]
    )
    post32 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image32-Lucky.png',
        caption='Been playing too much, need to rest',
        post_likes=[demo, user3, user4, user6]
    )
    post33 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image33-Lucky.png',
        caption='Me and my twin.',
        post_likes=[user4]
    )
    post34 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image34-Lucky.png',
        caption="Prancing on the court with my friend.",
        post_likes=[user3]
    )
    post35 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image35-Lucky.png',
        caption='Rise and shine, its wakey time.',
        post_likes=[demo, user6]
    )
    post36 = Post(
        ownerId=5,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image36-Lucky.png',
        caption='Wot?',
        post_likes=[user3, user4]
    )
    post37 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image37-climb.png',
        caption='Mega classic. This climb is actually quite challenging if you suffer from reach deficiency.',
        post_likes=[user3, user4, user5]
    )
    post38 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image38-climb.png',
        caption='Desert sunsets and dope rocks'
        ,
        post_likes=[demo, user3, user4, user5]
    )
    post39 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image39-climb.png',
        caption='Chill vibes all weekend kickin it at Tuolumne',
        post_likes=[user3, user4]
    )
    post40 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image40-climb.png',
        caption='The mountains are calling and I mustache to go',
        post_likes=[demo, user3, user4, user5]
    )
    post41 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image41-climb.png',
        caption='One day I will send',
        post_likes=[user4]
    )
    post42 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image42-climb.png',
        caption="Keep expanding the mind",
        post_likes=[user3, user4, user5]
    )
    post43 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image43-climb.png',
        caption='I am groot',
        post_likes=[demo, user5]
    )
    post44 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image44-climb.png',
        caption="Life in the magical forest of Squamish",
        post_likes=[user3]
    )
    post45 = Post(
        ownerId=6,
        image='https://instaspambucket.s3.us-west-1.amazonaws.com/image45-climb.png',
        caption='Growing out the beard for no shave November',
        post_likes=[demo, user4, user5]
    )
    post46=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image46-car.png',
            caption='I live my life a quarter mile at a time.',
            post_likes=[user3, user4, user5, user6]
    )
    post47=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image47-forest.png',
            caption='The mountains are calling and I must go',
            post_likes=[demo, user3, user4]
    )
    post48=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image48-city.png',
            caption='A cloudy day is no match for a sunny disposition.',
            post_likes=[demo, user5, user6]
    )
    post49=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image49-mountains.png',
            caption='Going to the mountains is like going home.',
            post_likes=[demo, user3, user4, user5, user6]
    )
    post50=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image50-new-york-sunset.png',
            caption='New York is a sucked orange.',
            post_likes=[user3, user4, user5, user6]
    )
    post51=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image51-tropical-beach.png',
            caption="Life is a beach, I'm just playing in the sand.",
            post_likes=[demo, user4, user5, user6]
    )
    post52=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image52-cool-car.png',
            caption='Too soon junior.',
            post_likes=[user3, user4, user5, user6]
    )
    post53=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image53-snowboarding.png',
            caption="You can't buy happiness, but you can buy a lift pass.",
            post_likes=[user3, user5]
    )
    post54=Post(
            ownerId=1,
            image='https://instaspambucket.s3.us-west-1.amazonaws.com/image54-climbing-cliff.png',
            caption='The best climber in the world is the one having the most fun!',
            post_likes=[user4, user5, user6]
    )

    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)
    db.session.add(post22)
    db.session.add(post23)
    db.session.add(post24)
    db.session.add(post25)
    db.session.add(post26)
    db.session.add(post27)
    db.session.add(post28)
    db.session.add(post29)
    db.session.add(post30)
    db.session.add(post31)
    db.session.add(post32)
    db.session.add(post33)
    db.session.add(post34)
    db.session.add(post35)
    db.session.add(post36)
    db.session.add(post37)
    db.session.add(post38)
    db.session.add(post39)
    db.session.add(post40)
    db.session.add(post41)
    db.session.add(post42)
    db.session.add(post43)
    db.session.add(post44)
    db.session.add(post45)
    db.session.add(post46)
    db.session.add(post47)
    db.session.add(post48)
    db.session.add(post49)
    db.session.add(post50)
    db.session.add(post51)
    db.session.add(post52)
    db.session.add(post53)
    db.session.add(post54)

    db.session.commit()


def undo_all():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
    db.session.execute('TRUNCATE hashtags RESTART IDENTITY CASCADE;')
    db.session.commit()
