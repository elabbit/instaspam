import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts } from "../../store/posts";



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
    <div>
      <h1>user feed!!!!!</h1>
      {Object.values(posts).map((post)=> {
        return (
          <img src={post?.image}/>
        )
      })}
    </div>
  )
}

export default UserFeed;
