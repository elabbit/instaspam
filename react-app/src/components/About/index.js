import './About.css'

const About = () => {

    return (
        <div className='page-outer'>
            <div className='page-spacer' />
            <div className='page-container'>
                <div> Welcome to instaspam, a website dedicated to bringing good friends together and kind strangers to connect potential friends! Instaspam is a clone of Instagram that "spams" the user with various posts. This project used:
                    flask-SQLAlchemy/Python for the backend,
                    posgtreSQL for the database,
                    AWS for the file upload system,
                    and React-Redux for the frontend.
                </div>
                <div>Meet our team...</div>
                <div className='about-container'>
                    <div className='jade'>
                        <div className='about-user'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicJonathan.PNG' className='about-profile-image' />
                            <div className='about-header'>
                                <div className='about-name'>jonathankim</div>
                                <div className='about-subtext'>kim.jonathan426@gmail.com</div>
                            </div>
                        </div>
                        <div className='about-image-container'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicJonathan.PNG' className='about-image' />
                        </div>
                        <div className='about-comments'>
                            <div className='about-comment'>
                                <span className='about-name'>
                                    jonathankim&nbsp;
                                    <span className='about-subtext'>
                                        I love to go on walks with my dogs.
                                        <div>Github: <a href="https://github.com/KimJonathan426" target='_blank' rel="noreferrer"> <i className="fa-brands fa-github"></i></a></div>
                                        <div>LinkedIn: <a href="https://www.linkedin.com/in/kimjonathan426" target='_blank' rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a></div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div><div className='jade'>
                        <div className='about-user'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicAbel.png' className='about-profile-image' />
                            <div className='about-header'>
                                <div className='about-name'>abeltesfa</div>
                                <div className='about-subtext'>abeltesfa@gmail.com</div>
                            </div>
                        </div>
                        <div className='about-image-container'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicAbel.png' className='about-image' />
                        </div>
                        <div className='about-comments'>
                            <div className='about-comment'>
                                <span className='about-name'>
                                    abeltesfa&nbsp;
                                    <span className='about-subtext'>
                                        I love to listen to music and watch basketball.
                                        <div>Github: <a href="https://github.com/abeltesfa" target='_blank' rel="noreferrer"> <i className="fa-brands fa-github"></i></a></div>
                                        <div>LinkedIn: <a href="https://www.linkedin.com/in/abel-tesfa-93121866/" target='_blank' rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a></div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div><div className='jade'>
                        <div className='about-user'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicDavid.png' className='about-profile-image' />
                            <div className='about-header'>
                                <div className='about-name'>davidchung</div>
                                <div className='about-subtext'>dvchung00@gmail.com</div>
                            </div>
                        </div>
                        <div className='about-image-container'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/ProfilePicDavid.png' className='about-image' />
                        </div>
                        <div className='about-comments'>
                            <div className='about-comment'>
                                <span className='about-name'>
                                    davidchung&nbsp;
                                    <span className='about-subtext'>
                                        I love to go for runs in the evening and anything to do with basketball!
                                        <div>Github: <a href="https://github.com/dchung007" target='_blank' rel="noreferrer"> <i className="fa-brands fa-github"></i></a></div>
                                        <div>LinkedIn: <a href="https://www.linkedin.com/in/david-chung-98a5651aa/" target='_blank' rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a></div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div><div className='jade'>
                        <div className='about-user'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/user6-eddie-profile-pic.png' className='about-profile-image' />
                            <div className='about-header'>
                                <div className='about-name'>eddielau</div>
                                <div className='about-subtext'>edwinjlau26@gmail.com</div>
                            </div>
                        </div>
                        <div className='about-image-container'>
                            <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/user6-eddie-profile-pic.png' className='about-image' />
                        </div>
                        <div className='about-comments'>
                            <div className='about-comment'>
                                <span className='about-name'>
                                    eddielau&nbsp;
                                    <span className='about-subtext'>
                                        I absolutely love rock climbing and most sports- especially F1 racing, UFC, and basketball. I like to live by this saying: Live, Lau, Love.
                                        <div>Github: <a href="https://github.com/elabbit" target='_blank' rel="noreferrer"> <i className="fa-brands fa-github"></i></a></div>
                                        <div>LinkedIn: <a href="https://www.linkedin.com/in/edwin-lau-312a11241/" target='_blank' rel="noreferrer"> <i className="fa-brands fa-linkedin-in"></i></a></div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
