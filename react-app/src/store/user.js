const GET_USER = 'session/GET_USER'

const getUserAction = (user) => ({
    type: GET_USER,
    payload: user
})

export const getUser = (username) => async (dispatch) => {
    const response = await fetch(`/api/users/${username}`);


    if(response.ok) {
        const user = await response.json();
        dispatch(getUserAction(user))
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
