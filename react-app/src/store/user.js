import { addFollow, removeFollow } from "./session";

const GET_USER = 'session/GET_USER'
const GET_ALL_USERS = 'session/GET_ALL_USERS'

export const getUserAction = (user) => ({
  type: GET_USER,
  payload: user
})

export const getAllUsersAction = (users) => ({
  type: GET_ALL_USERS,
  payload: users
})

export const getUser = (username) => async (dispatch) => {
  const response = await fetch(`/api/users/${username}`);

  if (response.ok) {
    const user = await response.json();
    dispatch(getUserAction(user))
  }

}

// export const getAllUsers = () => async (dispatch) => {
//   const response = await fetch('/api/users/all')

//   if (response.ok) {
//     const users = await response.json();
//     dispatch(getAllUsersAction(users));
//     return users;
//   }
// }

export const follow = (userId) => async (dispatch) => {
  const response = await fetch(`/api/follows/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const user = await response.json();
    // dispatch(getUserAction(user))
    dispatch(addFollow(user))
    return user
  }
}

export const unfollow = (userId) => async (dispatch) => {
  const response = await fetch(`/api/follows/unfollow/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
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
    // case GET_ALL_USERS:
    //   const newState1 = {};
    //   newState1.users = {};
    //   action.payload.users.forEach(user => {
    //     newState1.users[user.username] = user
    //   })
    //   return newState1;
    default:
      return state;
  }
}
