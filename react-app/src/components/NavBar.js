
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  return (
    sessionUser ?
    <nav>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/posts/new' exact={true} activeClassName='active'>
            Create a Post
          </NavLink>
        </div>
        <div>
          <NavLink to='/explore' exact={true} activeClassName='active'>
            Explore
          </NavLink>
        </div>
        <div>
          <NavLink to={`${sessionUser.username}`} exact={true} activeClassName='active'>
            Profile
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
    </nav>
    :
    null
  );
}

export default NavBar;
