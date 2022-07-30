const LOAD_POSTS = 'posts/LOAD_POSTS';
const ADD_POST = 'posts/ADD_POST';
const EDIT_POST = 'posts/EDIT_POST'
const DELETE_POST = 'posts/DELETE_POST';
const ADD_COMMENT = 'posts/ADD_COMMENT';
const CLEAR_POSTS = 'posts/CLEAR_POSTS';
const DELETE_COMMENT = 'posts/DELETE_COMMENT'


const actionLoadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});

const actionAddPost = (post) => ({
  type: ADD_POST,
  post
});

const actionEditPost = (editedPost) => ({
  type: EDIT_POST,
  editedPost
})

const actionDeletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

export const clearPosts = () => ({
  type: CLEAR_POSTS
})

const deleteComment = (commentId, postId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId
  }
}

export const getHashtagPosts = (hashtag) => async (dispatch) => {
  const response = await fetch(`/api/posts/hashtag/${hashtag}`)
  if (response.ok) {
    const posts = await response.json();
    dispatch(actionLoadPosts(posts));
    return posts;
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
  else {
    const error = await response.json();
    return error
  }
}

export const editPost = (postId, caption) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      caption
    })
  })

  if (response.ok) {
    const editedPost = await response.json();
    dispatch(actionEditPost(editedPost));
    return editedPost;
  }
}

export const deletePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/delete`, {
    method: 'DELETE'
  })
  if (response.ok) {
    dispatch(actionDeletePost(postId))
  }
}

export const createComments = (postId, commentBody) => async (dispatch) => {
  const response = await fetch('/api/comments/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      postId,
      commentBody
    })
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
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    dispatch(deleteComment(commentId, postId));
    return commentId;
  }
}

export const updateComment = (postId, commentId, commentBody) => async dispatch => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      postId,
      commentBody
    })
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(addComment(comment));
    return comment
  }
}

export const createLike = (postId) => async dispatch => {
  const response = await fetch(`/api/posts/like/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const post = await response.json();
    dispatch(actionEditPost(post))
    return 'success';
  }
}

export const createUnlike = (postId, submit) => async dispatch => {
  const response = await fetch(`/api/posts/unlike/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const post = await response.json();
    dispatch(actionEditPost(post))
    return 'success';
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

    case CLEAR_POSTS:
      return {};

    case EDIT_POST:
      const newState3 = { ...state }
      newState3[action.editedPost.id] = action.editedPost
      return newState3;

    case DELETE_POST:
      const newState4 = { ...state }
      delete newState4[action.postId]
      return newState4

    case ADD_COMMENT:
      const newState5 = { ...state }
      newState5[action.comment.postId].comments[action.comment.id] = action.comment
      return newState5

    case DELETE_COMMENT:
      const newState6 = { ...state }
      delete newState6[action.postId].comments[action.commentId]
      return newState6

    default:
      return state;
  }
}

export default postsReducer;
