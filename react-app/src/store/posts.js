
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
