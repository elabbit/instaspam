import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import LoginForm from '../auth/LoginForm';
import './Splash.css'
import splashImg1 from '../../images/instaspamsplashimg1.png'
import splashImg2 from '../../images/instaspamsplashimg2.png'
import splashImg3 from '../../images/instaspamsplashimg3.png'
import realsplashImg1 from '../../images/instaspamsplashrealimg1.png'
import realsplashImg2 from '../../images/instaspamsplashrealimg2.png'
import realsplashImg3 from '../../images/instaspamsplashrealimg3.png'
import SignUpForm from '../auth/SignUpForm';
import instaspamLogo from "../../images/instaspam-logo.png"


function Splash({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = 'demo@email.com';
  const password = 'password';

  const splashImages = [splashImg1, splashImg2, splashImg3];
  // const splashImages = [realsplashImg1, realsplashImg2, realsplashImg3];

  const [displayLogin, setDisplayLogin] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);

  const demoLogin = async (e) => {
    await dispatch(login(email, password))
  }

  useEffect(() => {
    if (sessionUser) {
      history.push('/')
    }
  }, [sessionUser, history])

  useEffect(()=> {
    const imgId = setInterval(()=> {
      if(imgIndex === splashImages.length -1) {
        setImgIndex(0);
      }
      else {
        setImgIndex(imgIndex + 1)
      }
    }, 7000)
    return () => clearInterval(imgId);
  }, [splashImages.length, imgIndex])


  return (
    <div className="page-outer">
    <div className='page-splash-container'>
      <div className='page-splash-content'>
        <div className='page-splash-content-left'>
          <img className='page-splash-img' src={splashImages[imgIndex]} alt="" />
        </div>
        <div className='page-splash-content-right'>
          <div className='page-splash-content-form'>
            <img src={instaspamLogo} className='page-splash-logo' alt="" />
            {displayLogin ?
            <LoginForm />
            : <SignUpForm />}
            <div className='page-splash-linebreak'>
              <div className='page-splash-linebreak-lines'></div>
              <div className='page-splash-linebreak-text'>OR</div>
              <div className='page-splash-linebreak-lines'></div>
            </div>
            <button className='page-splash-demo-btn' onClick={demoLogin}>Log in with Demo User</button>
          </div>
          {displayLogin ?
            <div className='page-splash-content-signup'>
              Don't have an account?
              <button className='page-splash-signup-link' onClick={() => setDisplayLogin(false)}>
                Sign Up
              </button>
            </div>
            : <div className='page-splash-content-signup'>
              Have an account?
              <button className='page-splash-signup-link' onClick={() => setDisplayLogin(true)}>
                Log In
              </button>
            </div>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Splash;
