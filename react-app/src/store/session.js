// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const ADD_FOLLOW = 'session/ADD_FOLLOW'
const REMOVE_FOLLOW = 'session/REMOVE_FOLLOW'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

export const addFollow = (user) => ({
  type: ADD_FOLLOW,
  user
})

export const removeFollow = (user) => ({
  type: REMOVE_FOLLOW,
  user
})


const initialState = { user: null };

export const editUser = (id, username, email, name, bio) => async (dispatch) => {
  const response = await fetch(`/api/auth/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id, username, email, name, bio
    })
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return 'success';
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}




export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (email, name, username, password, repeatPassword) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
      username,
      password,
      repeatPassword
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case ADD_FOLLOW:
      const newState1 = {...state}
      newState1.user.following.push(action.user)
      return newState1
    case REMOVE_FOLLOW:
      const newState = {...state}
      const userIndex= newState.user.following.findIndex(user => user.id === action.user.id)
      newState.user.following.splice(userIndex, 1)
      return newState
    default:
      return state;
  }
}
