
const LOAD_POSTS = 'posts/LOAD_POSTS';
const ADD_POST = 'posts/ADD_POST';
const DELETE_POST = 'posts/DELETE_POST';
const ADD_COMMENT = 'posts/ADD_COMMENT'
const DELETE_COMMENT = 'posts/DELETE_COMMENT'

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

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

const deleteComment = (commentId, postId) => {
  return {
      type: DELETE_COMMENT,
      commentId,
      postId
  }
}

export const getUserPosts = (username) => async (dispatch) => {
  const response = await fetch(`/api/posts/${username}`)

  if (response.ok) {
    const posts = await response.json();
    dispatch(actionLoadPosts(posts));
    return posts;
  }
}

export const getExplorePosts = (user) => async (dispatch) => {
  const response = await fetch(`/api/posts/explore/${user.id}`)

  if (response.ok) {
    const posts = await response.json();
    dispatch(actionLoadPosts(posts));
    return posts;
  }

}

export const getUserFeedPosts = (user) => async (dispatch) => {
  const response = await fetch(`/api/posts/feed/${user.id}`)

  if (response.ok) {
    const posts = await response.json();
    dispatch(actionLoadPosts(posts));
    return posts;
  }
}

export const addPost = (formData) => async (dispatch) => {
  const response = await fetch('/api/posts/new', {
    method: 'POST',
    body: formData
  })

  if (response.ok) {
    const post = await response.json();
    dispatch(actionAddPost(post))
    return post
  }

}

export const createComments = (commentData) => async (dispatch) => {
  const response = await fetch('/api/comments/new', {
    method: 'POST',
    body: commentData
  })

  if (response.ok) {
    const comment = await response.json()
    dispatch(addComment(comment))
    return comment
  }
}

export const removeComment = (commentId, postId) => async dispatch => {
  const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentId)
  });

  if (response.ok) {
      dispatch(deleteComment(commentId, postId));
      return commentId;
  }
}



const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      const newState1 = {};
      action.posts.user_posts.forEach(post => {
        newState1[post.id] = post;
        const commentObj = {}
        post.comments.forEach(comment => {
          commentObj[comment.id] = comment
        })
        newState1[post.id].comments = commentObj
      });
      return newState1;

    case ADD_POST:
      const newState2 = { ...state }
      newState2[action.post.id] = action.post
      newState2[action.post.id].comments = {}
      return newState2

    case ADD_COMMENT:
      const newState3 = { ...state }
      newState3[action.comment.postId].comments[action.comment.id] = action.comment
      return newState3

    case DELETE_COMMENT:
      const newState4 = {... state}
      console.log('NEWSTATE!!!!!!!!!!!!!!!!!!!',newState4)
      console.log('ACTION!!!!!!!!!!', newState4[action.postId].comments[action.commentId])
      delete newState4[action.postId].comments[action.commentId]
      return newState4

    default:
      return state;
  }

}

export default postsReducer;
