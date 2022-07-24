import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts } from "../../store/posts";
import PostContainer from "../PostContainer";




const UserFeed = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state => state.posts);
  // console.log(sessionUser)
  console.log(posts)

  useEffect(() => {
    dispatch(getUserFeedPosts(sessionUser))
  }, [dispatch])

  return (
    posts?
      <div>
        {Object.values(posts).map((post)=> (
          <div key={post.id}>
            <PostContainer post={post} />
          </div>
        ))}

      </div>
      :
      <h3>Loading...</h3>
  )
}

export default UserFeed;
