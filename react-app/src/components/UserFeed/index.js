import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts } from "../../store/posts";
import PostContainer from "../PostContainer";




const UserFeed = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getUserFeedPosts(sessionUser))
  }, [dispatch, sessionUser])

  return (
    <div className="page-outer">
      <div className="page-spacer"></div>
      <div className="page-container">
        {posts ?
          <div>
            {Object.values(posts).map((post) => (
              <div key={post.id}>
                <PostContainer post={post} sessionUser={sessionUser} />
              </div>
            ))}

          </div>
          :
          <h3>Loading...</h3>}
      </div>
    </div>
  )
}

export default UserFeed;
