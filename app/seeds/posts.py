from app.models import db, Post

def seed_posts():
    post1 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-classic-12oz-420x420.png',
        caption='The original. The timeless. The spiced hammiest of all SPAM® varieties. This is the taste that started it all back in 1937.',
    )
    post2 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/08/image-product_spam-with-real-hormel-bacon-12oz-420x420.png',
        caption="We know you're always in the mood for delicious SPAM® products, but what happens when you're also craving bacon? Fear not meat eater, for we have taken the best of both meats and canned it for your consumption!",
    )
    post3 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/08/image-product_spam-oven-roasted-turkey-12oz-420x420.png',
        caption="This SPAM® variety is made from 100% white, lean turkey. Some folks wonder why we didn't call it SPURKEY.",
    )
    post4 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-hickory-smoke-12oz-420x420.png',
        caption='If the best thing to come from burning sticks is the bonfire, this is a close second.',
    )
    post5 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/08/image-product_spam-hot-and-spicy-12oz-420x420.png',
        caption='Ever wonder what pork would taste like if pigs subsisted on hot peppers?',
    )
    post6 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-jalapeno-12oz-420x420.png',
        caption='Treat your taste buds to a fiesta of flavor with lively SPAM® Jalapeño.',
    )
    post7 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-teriyaki-12oz-420x420.png',
        caption='To Musubi, or not to musubi, that should not be a question.',
    )
    post8 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-portuguese-sausage-12oz-420x420.png',
        caption='"P.S." Have you ever wondered what that stands for at the end of a letter?',
    )
    post9 = Post(
        ownerId=2,
        image='https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-tocino-12oz-420x420.png',
        caption='As a token of our love for this country, we have created a Filipino Flavor — SPAM® Tocino! It has just the right mixture of sweet and meaty to satisfy your craving for Filipino cuisine.',
    )
    post10 = Post(
        ownerId=3,
        image='https://www.worldatlas.com/r/w1200/upload/11/6f/5b/shutterstock-245388445-3-min.jpg',
        caption='Mother Nature at its finest'
    )
    post11 = Post(
        ownerId=3,
        image='https://www.theoakleafnews.com/wp-content/uploads/2016/04/tumblr_nim7bbpzye1qm88jwo1_1280.jpg',
        caption='To the man who inspired millions, your impact on the game will never be forgotten. RIP Mamba.'
    )
    post12 = Post(
        ownerId=3,
        image='https://shibatalk.com/wp-content/uploads/2021/04/is-it-safe-for-shiba-inus-to-live-in-hot-weather-2-1024x576.jpg',
        caption="Man's best friend"
    )
    post13 = Post(
        ownerId=3,
        image='https://www.afarmgirlsdabbles.com/wp-content/uploads/2020/03/easy-hawaiian-poke-bowl_AFarmgirlsDabbles_AFD-7-sq-735x735.jpg',
        caption='Always in the mood for poki'
    )
    post14 = Post(
        ownerId=3,
        image='https://img.freepik.com/premium-photo/elderly-sporty-man-running-green-forest-during-morning-workout-copy-space-healthy-active-lifestyle-any-age-concept_116547-13923.jpg',
        caption='Morning runs are ELITE'
    )
    post15 = Post(
        ownerId=3,
        image='https://www.planetware.com/wpimages/2019/11/austria-top-ski-resorts-2020-snowboarder.jpg',
        caption="Shreddin' some ice"
    )
    post16 = Post(
        ownerId=3,
        image='https://wallpaperaccess.com/full/1137389.jpg',
        caption='This view never gets old'
    )
    post17 = Post(
        ownerId=3,
        image='https://onestopracing.com/wp-content/uploads/2021/12/Best-F1-Quotes-01.jpg',
        caption="If you ain't first, you're last."
    )
    post18 = Post(
        ownerId=3,
        image='https://www.telegraph.co.uk/multimedia/archive/02220/green-mountains_2220833k.jpg',
        caption='An unforgettable trip for sure'
    )
    post19 = Post(
        ownerId=4,
        image='https://i.pinimg.com/originals/79/08/3d/79083d9cce838a042d8eaf80ca7ec126.jpg',
        caption='Beautiful and best city in NC #CharlotteSkyline'
    )
    post20 = Post(
        ownerId=4,
        image='https://cdn.smokymountains.com/pois/images/Craggy-Pinnacle-Hike-5a566eaed6ed4.jpg',
        caption='Blue Ridge Mountains in NC'
    )
    post21 = Post(
        ownerId=4,
        image='https://i.pinimg.com/originals/af/52/9c/af529ced9139f1db526cd0014d7a15c0.jpg',
        caption='Outer Banks beach at sunrise'
    )
    post22 = Post(
        ownerId=4,
        image='https://pbs.twimg.com/media/FFi8azSVgAAXGgf.jpg',
        caption='Best university UNC-Chapel Hill- National Champs!'
    )
    post23 = Post(
        ownerId=4,
        image='https://www.farmvillelibrary.org/uploads/1/2/4/1/124119479/untitled-design-10_orig.png',
        caption='NCs bird the Red Cardinal'
    )
    post24 = Post(
        ownerId=4,
        image='https://boomtown-production-consumer-backup.s3.amazonaws.com/3850/files/2021/01/WalletHub_012521.png',
        caption='Capital of NC - Raleigh, NC'
    )
    post25 = Post(
        ownerId=4,
        image='https://pbs.twimg.com/media/FXF2bWsX0AADQd8.jpg',
        caption='Lakes at the Great Smoky Mountains'
    )
    post26 = Post(
        ownerId=4,
        image='https://pbs.twimg.com/media/DhhkVljU0AA4V4i.jpg',
        caption='Biltmore Estate near Asheville, NC'
    )
    post27 = Post(
        ownerId=4,
        image='https://www.ncarboretum.org/wp-content/uploads/2018/12/LocalLights.jpg',
        caption='Winter in Asheville, NC'
    )
    post28 = Post(
        ownerId=5,
        image='https://vetstreet.brightspotcdn.com/dims4/default/bcde26b/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fd9%2F5b08a09ea111e0a2380050568d634f%2Ffile%2FAmerican-Cocker-2-645mk062111.jpg',
        caption='Groomed and Fluffy'
    )
    post29 = Post(
        ownerId=5,
        image='https://www.k9rl.com/wp-content/uploads/2020/04/American-Cocker-Spaniel-Photo.jpg',
        caption="Straight hair don't care"
    )
    post30 = Post(
        ownerId=5,
        image='https://fidoseofreality.com/wp-content/uploads/2022/03/feature-photo-min.jpg',
        caption='Mini cocker spaniels'
    )
    post31 = Post(
        ownerId=5,
        image='https://www.espree.com/sites/default/files/2019-10/CockerSpaniel%28American%29.png',
        caption='Pose.'
    )
    post32 = Post(
        ownerId=5,
        image='https://www.vetdermclinic.com/wp-content/uploads/2019/05/VetDERM-Cocker-Spaniel-Care-Tips-Part-2-Breed-Specific-Dog-Skin-Problems.jpg',
        caption='Been playing too much, need to rest'
    )
    post33 = Post(
        ownerId=5,
        image='https://st.depositphotos.com/1806346/2417/i/950/depositphotos_24173463-stock-photo-american-cocker-spaniel-puppy-with.jpg',
        caption='Me as a baby'
    )
    post34 = Post(
        ownerId=5,
        image='https://www.dogbreedslist.info/uploads/dog-pictures/cocker-spaniel-2.jpg',
        caption="It only looks like I'm sad, im actually pretty happy"
    )
    post35 = Post(
        ownerId=5,
        image='https://dogfoodsmart.com/wp-content/uploads/2021/04/American_Cocker_Spaniel_Growth_Chart.jpg',
        caption='Striking another pose, I should compete.'
    )
    post36 = Post(
        ownerId=5,
        image='https://www.nbcsports.com/sites/nbcsports.com/files/2019/11/25/nbc_dogshow_sporting_cockerspanielparticolor_191123.jpg',
        caption='On my way to win this thing.'
    )
    post37 = Post(
        ownerId=6,
        image='https://wallpaperaccess.com/full/5044017.jpg',
        caption='I live my life a quarter mile at a time.',
    )
    post38 = Post(
        ownerId=6,
        image='https://wallpapercave.com/wp/wp3788220.jpg',
        caption='The mountains are calling and I must go'
    )
    post39 = Post(
        ownerId=6,
        image='https://wallpaperaccess.com/full/327437.jpg',
        caption='A cloudy day is no match for a sunny disposition.'
    )
    post40 = Post(
        ownerId=6,
        image='https://wallpapercave.com/wp/wp3788129.jpg',
        caption='Going to the mountains is like going home.'
    )
    post41 = Post(
        ownerId=6,
        image='https://wallpapercave.com/w/wp3788128',
        caption='New York is a sucked orange.'
    )
    post42 = Post(
        ownerId=6,
        image='https://www.lifewire.com/thmb/xlnqVmg658v1eQUqy1gbh3i5oNU=/1080x1080/smart/filters:no_upscale()/tropical-beach-wallpaper-beach-backgrounds-587fbb765f9b584db3241860.jpg',
        caption="Life is a beach, I'm just playing in the sand."
    )
    post43 = Post(
        ownerId=6,
        image='https://i2.wp.com/gramotoring.com/wp-content/uploads/2020/07/gramotoring-1595395337268.jpg?fit=1080%2C1080&ssl=1',
        caption='Too soon junior.'
    )
    post44 = Post(
        ownerId=6,
        image='https://cdn.shopify.com/s/files/1/2059/8303/files/Vendredi_13_octobre_-_Capita_Phil_Jacques.JPG?v=1583958107',
        caption="You can't buy happiness, but you can buy a lift pass."
    )
    post45 = Post(
        ownerId=6,
        image='https://i.pinimg.com/originals/42/3e/78/423e78b888c60c45869c106208c5aebf.jpg',
        caption='The best climber in the world is the one having the most fun!'
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

    db.session.commit()



def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
