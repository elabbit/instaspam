import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { getUser } from '../store/user';

function User() {
  const [user, setUser] = useState({});
  const { username }  = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username))

  },[dispatch])

  return (
    <ul>
        <li>
        <img src={user.profileImage} style={{height:'50px', width:'50px', borderRadius:'50px'}}/>
      </li>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Bio</strong> {user.bio}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
