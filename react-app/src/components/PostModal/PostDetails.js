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
          <div className="post-modal-username-only">
            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
          </div>
          <div className="">
            <FollowButton sessionUser={sessionUser} matchUsername={post.ownerUsername} matchId={post.ownerId} />
          </div>
        </div>
        {!showEditPost ?
          <div className="post-modal-caption-buttons">
            <div className="post-modal-username-caption">
              <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            </div>
            <div className="post-modal-username-caption">
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
          <div className="post-modal-username-edit-field">
            <div>
              <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            </div>
            <div>
              <EditPost post={post} setShowEditPost={setShowEditPost} />
            </div>
          </div>
        }
        <div className="post-modal-comments-section">
          {Object.values(post.comments).map((comment) => (
            <div key={comment.id}>
              <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser?.id} />
            </div>
          ))}
        </div>

        <div className="post-modal-likes-create-comment-container">
          <div className="post-modal-likes-button-container">
            <div>
              <LikeToggle post={post} sessionUsername={sessionUser.username} />
            </div>
            <div>
              <LikesModal likes={post.likes} sessionUser={sessionUser}/>
            </div>
          </div>
          <div className="post-modal-create-comment-container">
            <CreateComment postId={post.id} />
          </div>
        </div>
      </div>
    </div >
  )
}
export default PostDetails;
