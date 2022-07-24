import { Link } from 'react-router-dom';


function Splash () {
    return(
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
</div>
    )
}

export default Splash;
