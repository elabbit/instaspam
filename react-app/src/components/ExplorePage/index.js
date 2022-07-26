import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExplorePosts, clearPosts } from "../../store/posts";
import PostModal from "../PostModal";
import "./ExplorePage.css"

const ExplorePage = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const postList = Object.values(posts);

  const newPost = postList.findIndex(post => post.ownerId == sessionUser.id)

  if (newPost >= 0) {
    postList.splice(newPost, 1)
  }

  //shuffles when adding or removing comments/likes, need to use CSS to shuffle
  // postList.sort(() => Math.random() - 0.5)

  useEffect(() => {
    dispatch(getExplorePosts(sessionUser))
    return dispatch(clearPosts())
  }, [dispatch, sessionUser])

  return (
    <div className="page-outer">
      <div className="page-spacer"></div>
      <div className="page-container">
        {posts ?

          <div className="posts-explore-container">
            {postList.map((post) => (
              <div key={post.id} id={postList.indexOf(post) + 1}>
                <PostModal post={post} />
              </div>
            ))}
          </div>
          :
          <h3>Loading...</h3>}
      </div>
    </div>
  )
}

export default ExplorePage;
