
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreatePostModal from './CreatePostModal';
import "./NavBar.css"

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  return (
    sessionUser ?
    <div className="navbar-outer">


      <nav className="navbar-container">
        <div>
          <div className="nav-left">
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
        </div>
        <div className="nav-right">

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
        </div>
      </nav>
      </div>
      :
      null
  );
}

export default NavBar;
