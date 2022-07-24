import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import PostModal from "../PostModal";



const UserPosts = ({posts}) => {
  const dispatch = useDispatch();
  const postList = Object.values(posts);
  postList.sort((a,b)=>b.id-a.id)

  return (
    posts ?
      <div className="posts-user-container">
        {postList.map((post)=> (
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
