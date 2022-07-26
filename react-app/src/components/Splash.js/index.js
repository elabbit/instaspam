import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import LoginForm from '../auth/LoginForm';
import './Splash.css'
import logo from './instaspamlogo.png'
import splashImg from './instaspamsplash.png'
import SignUpForm from '../auth/SignUpForm';


function Splash({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = 'demo@email.com';
  const password = 'password';

  const [displayLogin, setDisplayLogin] = useState(true);

  const demoLogin = async (e) => {
    await dispatch(login(email, password))
  }

  useEffect(() => {
    if (sessionUser) {
      history.push('/')
    }
  }, [sessionUser, history])


  return (
    <div className='page-splash-container'>
      <div className='page-splash-content'>
        <div className='page-splash-content-left'>
          <img src={splashImg}></img>
        </div>
        <div className='page-splash-content-right'>
          <div className='page-splash-content-form'>
            <img src={logo} className='page-splash-logo'></img>
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
  )
}

export default Splash;
