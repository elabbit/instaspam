import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CreatePostModal from './CreatePostModal';
import "./NavBar.css"
import { ReactComponent as Home } from "./images/home.svg"
import { ReactComponent as HomeFill } from "./images/home-fill.svg"
import { ReactComponent as Explore } from "./images/explore.svg"
import { ReactComponent as ExploreFill } from "./images/explore-fill.svg"
import instaspamLogo from "../images/instaspam-logo.png"
import about from "./images/about.png"
import aboutfill from "./images/about-fill.png"
import Dropdown from './Dropdown';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [homeActive, setHomeActive] = useState()
  const [exploreActive, setExploreActive] = useState()
  const [aboutActive, setAboutActive] = useState()
  const [dropdown, setDropdown] = useState(false)


  const handleClick = () => {
    setDropdown(!dropdown)
  }

  return (
    sessionUser ?
      <div className="navbar-outer">
        <nav className="navbar-container">
          <div className="nav-left">
            <NavLink to='/' exact={true} activeClassName='active'>
              <img className="navbar-logo" src={instaspamLogo} ></img>
            </NavLink>
          </div>
          <div className="nav-right">
            <div className="home-icon-div">
              <NavLink to='/' exact={true} activeClassName='active' isActive={(match, location) => {
                if (match) {
                  setHomeActive(true)
                } else {
                  setHomeActive(false)
                }
                return match;
              }} >
                {homeActive ?
                  <HomeFill className='icon home-icon' />
                  :
                  <Home className='icon home-icon' />
                }
              </NavLink>
            </div>

            <div className="explore-icon-div">
              <NavLink to='/explore' exact={true} activeClassName='active' isActive={(match, location) => {
                if (match) {
                  setExploreActive(true)
                } else {
                  setExploreActive(false)
                }
                return match;
              }}>
                {exploreActive ?
                  <ExploreFill className='icon explore-icon' />
                  :
                  <Explore className='icon explore-icon' />
                }
              </NavLink>
            </div>
            <div>
              <CreatePostModal />
            </div>
            <div className="about-icon-div">
              <NavLink to='/about' exact={true} activeClassName='active' isActive={(match, location) => {
                if (match) {
                  setAboutActive(true)
                } else {
                  setAboutActive(false)
                }
                return match;
              }}>
                {aboutActive ?
                  <img className="about-icon" src={aboutfill} alt="About" />
                  :
                  <img className="about-icon" src={about} alt="About" />
                }
              </NavLink>
            </div>
            <div className="profile-icon-div" onClick={handleClick}>
              <img className={dropdown ? "profile-icon outline" : "profile-icon"} src={sessionUser.profileImage}
              />
              {dropdown && <Dropdown sessionUser={sessionUser} />}
            </div>
          </div>
        </nav >
      </div >
      :
      null
  );
}

export default NavBar;
