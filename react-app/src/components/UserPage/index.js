import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { getUser } from '../../store/user';



const UserPage = () => {

    const { username }  = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(username))
      },[dispatch])


      return(
        <h1>{username}</h1>
      )
}

export default UserPage;
