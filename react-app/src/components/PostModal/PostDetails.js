import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/posts";
import CreateComment from "../CreateComment";

import { Link } from 'react-router-dom';
import EditPost from "../EditPost";
import CommentDetails from "../CommentDetails";
import FollowButton from "../FollowButton";

function PostDetails({ post }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const sessionFollowing = sessionUser.following
  console.log(post)



  const onDelete = async () => {
    const deletedPost = await dispatch(deletePost(post.id))
  }

  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} />
      </div>
      <div className="post-mod-right">
        <div>
          <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
          <span>{post.caption}</span>
        </div>
        <div>
          <FollowButton sessionFollowing={sessionFollowing} matchUsername={post.ownerUsername} matchId={post.ownerId}/>
        </div>
        {Object.values(post.comments).map((comment) => (
          <div key={comment.id}>
            <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser?.id}/>
          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment postId={post.id} />
        </div>
        {post.ownerId === sessionUser.id &&
          <div>
            <div>
              <EditPost post={post} />
            </div>
            <div>
              <button onClick={onDelete}>Delete</button>
            </div>
          </div>
        }
      </div>
    </div >
  )
}
export default PostDetails;
