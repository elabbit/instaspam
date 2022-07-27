import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/posts";
import CreateComment from "../CreateComment";
import { Link } from 'react-router-dom';
import EditPost from "../EditPost";
import CommentDetails from "../CommentDetails";
import FollowButton from "../FollowButton";
import LikeToggle from "../LikeToggle";
import LikesModal from "../LikesModal";
import './PostModal.css'

function PostDetails({ post }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const sessionFollowing = sessionUser.following
  const [showEditPost, setShowEditPost] = useState(false);

  const onDelete = async () => {
    await dispatch(deletePost(post.id))
  }

  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} alt="" />
      </div>
      <div className="post-mod-right">
        <div className="post-modal-username-follow-button">
          <div>
            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
          </div>
          <div className="">
            <FollowButton sessionFollowing={sessionFollowing} matchUsername={post.ownerUsername} matchId={post.ownerId} />
          </div>
        </div>
        {!showEditPost ?
          <div className="post-modal-caption-buttons">
            <div>
              <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            </div>
            <div>
              <span>{post.caption}</span>
            </div>
            {post.ownerId === sessionUser.id ?
              <div>
                <button className="post-modal-edit-delete-buttons" onClick={() => setShowEditPost(true)}>Edit</button>
                <button className="post-modal-edit-delete-buttons" onClick={onDelete}>Delete</button>
              </div>
              :
              null
            }
          </div>
          :
          <div>
            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            <EditPost post={post} setShowEditPost={setShowEditPost} />
          </div>
        }
        {Object.values(post.comments).map((comment) => (
          <div key={comment.id}>
            <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser?.id} />
          </div>
        ))}
        <div>
          <div>
            <LikeToggle post={post} sessionUsername={sessionUser.username} />
          </div>
          <LikesModal likes={post.likes} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    </div >
  )
}
export default PostDetails;
