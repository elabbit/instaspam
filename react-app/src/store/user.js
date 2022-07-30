import { addFollow, removeFollow } from "./session";

const GET_USER = 'session/GET_USER'

export const getUserAction = (user) => ({
    type: GET_USER,
    payload: user
})

export const getUser = (username) => async (dispatch) => {
    const response = await fetch(`/api/users/${username}`);

    if(response.ok) {
        const user = await response.json();
        dispatch(getUserAction(user))
    } else{
      return null;
    }

  }

export const follow = (userId) => async(dispatch) => {
  const response = await fetch(`/api/follows/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });

    if(response.ok) {
      const user = await response.json();
      // dispatch(getUserAction(user))
      dispatch(addFollow(user))
      return user
    }
}

export const unfollow = (userId) => async(dispatch) => {
  const response = await fetch(`/api/follows/unfollow/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });

    if(response.ok) {
      const user = await response.json();
      // dispatch(getUserAction(user))
      dispatch(removeFollow(user))
      return user
    }
}


  export default function reducer(state = {}, action) {
    switch (action.type) {
      case GET_USER:
        return { [action.payload.username]: action.payload }
      default:
        return state;
    }
}
