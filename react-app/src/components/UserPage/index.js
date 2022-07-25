import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/user';
import UserPosts from '../UserPosts';
import { getUserPosts, clearPosts } from "../../store/posts";
import "./UserPage.css"

const UserPage = ({sessionUser}) => {
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
      (user && posts && numberPosts && sessionUser) ?
        <div>
          <div className="profile-info-container">
            <div>
              <img className="profile-image" src={user.profileImage} alt='' />
            </div>
            <div>
              <div>
                <h2>{user.username}</h2>
                {(sessionUser.id === user.id) &&
                  (<Link to="/accounts/edit">Edit Profile</Link>)}
              </div>
              <div>
                <div>Posts: {numberPosts}</div>
                <div>Followers: {(user.followers).length}</div>
                <div>Following: {(user.following).length}</div>
              </div>
              <div>
                <div>{user.name}</div>
                <div>{user.bio}</div>
              </div>
            </div>
          </div>
          <UserPosts posts={posts} />
        </div>
        : <h3>Loading...</h3>

  )
}

export default UserPage;
