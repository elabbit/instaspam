import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from '../../store/user';



const UserPage = () => {

    const { username }  = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user[username])

    useEffect(() => {
        dispatch(getUser(username))
      },[dispatch])


      return(
        user ?
        <div>
          <img src={user.profileImage} alt=''/>
          <h1>{user.username}</h1>
          <p>{user.bio}</p>
          <p>Followers: {(user.followers).length}</p>
          <p>Following: {(user.following).length}</p>

        </div>
        : <h3>Loading....</h3>
      )
}

export default UserPage;
