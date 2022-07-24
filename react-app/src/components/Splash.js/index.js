import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';


function Splash({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = 'demo@email.com';
  const password = 'password';

  const demoLogin = async (e) => {
    const loggedIn = await dispatch(login(email, password))
  }

  useEffect(() => {
    if (sessionUser) {
      history.push('/')
    }
  }, [sessionUser])


  return (
    <div>
      <div>
        <Link to='/login' exact={true}>
          Login
        </Link>
      </div>
      <div>
        <Link to='/sign-up' exact={true}>
          Sign Up
        </Link>
      </div>
      <div>
        <button onClick={demoLogin}>Demo user</button>
      </div>
    </div>
  )
}

export default Splash;
