import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import PostModal from "../PostModal";



const UserPosts = ({posts}) => {
  const dispatch = useDispatch();

  // const sessionUser = useSelector(state => state.session.user);

  // useEffect(() => {
  //   dispatch(getUserPosts(sessionUser))
  // }, [dispatch, sessionUser])

  return (
    posts ?
      <div className="posts-user-container">
        {Object.values(posts).map((post)=> (
          <div key={post.id}>
            <PostModal post={post} />
          </div>
        ))}
      </div>
      :
      <h3>Loading...</h3>
  )
}

export default UserPosts;
