import './About.css'

const About = () => {

    return (
        <div>
            <div className='jade'>
                <div className='about-user'>
                    <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/user5-LuckyProfile.png' className='about-profile-image' />
                    <div className='about-header'>
                        <div className='about-name'>jonathankim</div>
                        <div className='about-subtext'>Kim.Jonathan426@gmail.com</div>
                    </div>
                </div>
                <div className='about-image-container'>
                    <img src='https://instaspambucket.s3.us-west-1.amazonaws.com/user5-LuckyProfile.png' className='about-image'/>
                </div>
                <div className='about-comments'>
                    <div className='about-comment'>
                        <span className='about-name'>jonathankim&nbsp;</span>
                        <span className='about-subtext'>Insert description and links here in this "caption"</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
