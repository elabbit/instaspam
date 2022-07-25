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
    posts ?
      <div>
        {Object.values(posts).reverse().map((post) => (
          <div key={post.id}>
            <PostContainer post={post} sessionUser={sessionUser} />
          </div>
        ))}

      </div>
      :
      <h3>Loading...</h3>
  )
}

export default UserFeed;
