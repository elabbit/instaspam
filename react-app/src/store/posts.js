
const LOAD_POSTS = 'posts/LOAD_POSTS';
const ADD_POST = 'posts/ADD_POST';
const DELETE_POST = 'posts/DELETE_POST';

const actionLoadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});


const actionAddPost = (post) => ({
  type: ADD_POST,
  post
});

const actionDeletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const getUserPosts = (payload) => async (dispatch) => {
  const response = await fetch(`/api/posts/${payload.id}`)

  if (response.ok) {
    const posts = await response.json();
    // console.log(posts);
    dispatch(actionLoadPosts(posts));
    return posts;
  }
}

export const getExplorePosts = () => async (dispatch) => {
  const response = await fetch(`/api/posts/explore`)

  if (response.ok) {
    const posts = await response.json();
    // console.log(posts);
    dispatch(actionLoadPosts(posts));
    return posts;
  }

}

export const getUserFeedPosts = (payload) => async (dispatch) => {
  const response = await fetch(`/api/posts/feed/${payload.id}`)

  if (response.ok) {
    const posts = await response.json();
    // console.log(posts);
    dispatch(actionLoadPosts(posts));
    return posts;
  }
}


const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      //const newState1 = { ...state };
      const newState1 = {};
      action.posts.forEach(post => {
        newState1[post.id] = post;
      });
      return newState1;
    default:
      return state;
  }

}

export default postsReducer;
