
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreatePostModal from './CreatePostModal';

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
        <li>
          <NavLink to='/about' exact={true} activeClassName='active'>
            About
          </NavLink>
        </li>
        <div>
          <CreatePostModal />
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
