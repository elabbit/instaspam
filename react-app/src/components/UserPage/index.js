import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/user';
import UserPosts from '../UserPosts';
import { getUserPosts, clearPosts } from "../../store/posts";
import "./UserPage.css"

const UserPage = ({ sessionUser }) => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user[username])
  const posts = useSelector(state => state.posts)
  const numberPosts = Object.keys(posts).length


  useEffect(() => {
    dispatch(getUser(username))
    dispatch(getUserPosts(username))
    return dispatch(clearPosts())
  }, [dispatch, username])

  return (
    <div className="page-outer">
      <div className="page-spacer"></div>
      <div className="page-container">
        {(user && sessionUser) ?
          <div className='page-margins'>
            <div className="profile-info-container">
              <div className='profile-image-container'>
                <img className="profile-image" src={user.profileImage} alt='' />
              </div>
              <div className="profile-details">
                <div className='profile-username-edit'>
                  <div className='profile-page-username'>{user.username}</div>
                  {(sessionUser.id === user.id) && (
                    <div className='edit-profile-button'>
                      <Link className='edit-profile-link' to="/accounts/edit">Edit Profile</Link>
                    </div>)}
                </div>
                <div className='user-posts-follow'>
                  <div className='user-posts-follow-section'><span className='profile-post-follow-number'>{numberPosts}</span> posts</div>
                  <div className='user-posts-follow-section'><span className='profile-post-follow-number'>{(user.followers).length} </span>followers</div>
                  <div className='user-posts-follow-section'><span className='profile-post-follow-number'>{(user.following).length} </span> following</div>
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
      </div>
    </div>
  )
}

export default UserPage;
