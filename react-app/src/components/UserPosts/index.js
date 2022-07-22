import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserPosts } from "../../store/posts";



const UserPosts = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state => state.posts);
  // console.log(sessionUser)
  // console.log(posts)

  useEffect(() => {
    dispatch(getUserPosts(sessionUser))
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

export default UserPosts;
