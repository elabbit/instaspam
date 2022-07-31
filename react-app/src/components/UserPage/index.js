import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/user';
import UserPosts from '../UserPosts';
import { getUserPosts, clearPosts } from "../../store/posts";
import "./UserPage.css"
import Followers from '../FollowersModal';
import Following from '../FollowingModal';
import FollowButton from '../FollowButton';

const UserPage = ({ sessionUser }) => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user[username])
  const posts = useSelector(state => state.posts)
  const numberPosts = Object.keys(posts).length
  const [notFound, setNotFound] = useState(false);


  useEffect(() => {
    async function fetchUser() {
      const response = await dispatch(getUser(username))
      if (response.errors) {
        setNotFound(true)
      } else {
        dispatch(getUserPosts(username))
      }
    }
    fetchUser();
    return dispatch(clearPosts())
  }, [dispatch, username])

  return (
    <div className="page-outer">
      <div className="page-spacer"></div>
      <div className="page-container">

        {!notFound ?
          <>
            {user ?
              <div className='page-margins'>
                <div className="profile-info-container">
                  <div className='profile-image-container'>
                    <img className="profile-image" src={user.profileImage} alt='' />
                  </div>
                  <div className="profile-details">
                    <div className='profile-username-edit'>
                      <h2 className='profile-page-username'>{user.username}</h2>
                      {(sessionUser.id === user.id) ? (
                        <div className='edit-profile-button'>
                          <Link className='edit-profile-link' to="/accounts/edit">Edit Profile</Link>
                        </div>)
                        :
                        <div className='follow-profile-button'>
                          <FollowButton sessionUser={sessionUser} matchUsername={user.username} matchId={user.id} />
                        </div>
                      }
                    </div>
                    <div className='user-posts-follow'>
                      <div className='user-posts-follow-section'><span className='number-bold'>{numberPosts}</span> posts</div>

                      <Followers sessionUser={sessionUser} followers={user.followers} />
                      <Following sessionUser={sessionUser} following={user.following} />

                    </div>
                    <div>
                      <div className='user-name-bio' id='user-profile-name-bio'>{user.name}</div>
                      <div className='user-name-bio'>{user.bio}</div>
                    </div>
                  </div>
                </div>
                <div className='user-page-posts-container'>
                  <div className='toggle-user-profile-posts'>POSTS</div>
                  <UserPosts posts={posts} />
                </div>
              </div>
              : <h3>Loading...</h3>}
          </>
          :
          <h3>Page not found, please return <Link to="/">home.</Link></h3>

        }
      </div>
    </div>
  )
}

export default UserPage;
