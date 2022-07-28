import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CreateComment from "../CreateComment";
import EditPost from "../EditPost";
import CommentDetails from "../CommentDetails";
// import FollowButton from "../FollowButton";
import LikeToggle from "../LikeToggle";
import LikesModal from "../LikesModal";
import Timestamp from "../Timestamp";
import DeletePostModal from "../DeletePostModal";
import './PostModal.css';

function PostDetails({ post }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showEditPost, setShowEditPost] = useState(false);


  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} alt="" />
      </div>
      <div className="post-mod-right">
        <div>
          <div className="post-modal-username-follow-button">
            <div className="post-modal-profileimage">
              <img src={post.ownerProfileImage} alt="" />
            </div>
            <div className="post-modal-username-only">
              <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            </div>
            {post.ownerId === sessionUser.id ?
              <div className="pm-edit-del">
                <div className="pm-edit">
                  <button className="post-modal-edit-delete-buttons" onClick={() => setShowEditPost(true)}>Edit</button>
                </div>
                <div className="pm-del">
                  <DeletePostModal postId={post.id} />
                </div>
              </div>
              :
              null
            }
            <div>
              {/* <FollowButton sessionUser={sessionUser} matchUsername={post.ownerUsername} matchId={post.ownerId} /> */}
            </div>
          </div>
          <div className="post-modal-comments-section">
            {!showEditPost ?
              post.caption && (
                <div className="post-modal-profileimage owner-image">
                  <img src={post.ownerProfileImage} alt="" />
                  <div className="post-modal-caption-buttons">
                    <div className="post-modal-username-caption">
                      <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                      <span>{post.caption}</span>
                    </div>
                  </div>
                </div>
              )
              :
              <div className="post-modal-profileimage owner-image">
                <img src={post.ownerProfileImage} alt="" />
                <div className="post-modal-username-edit-field">
                  <div>
                    <EditPost post={post} setShowEditPost={setShowEditPost} />
                  </div>
                </div>
              </div>
            }
            <div >
              {Object.values(post.comments).map((comment) => (
                <div key={comment.id}>
                  <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser?.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="post-modal-likes-create-comment-container">
          <div className="post-modal-likes-button-container">
            <LikeToggle post={post} sessionUsername={sessionUser.username} />
            <LikesModal likes={post.likes} sessionUser={sessionUser} />
            <Timestamp post={post} />
          </div>
          <div className="feed-comment-form">
            <CreateComment postId={post.id} />
          </div>
        </div>
      </div>
    </div >
  )
}
export default PostDetails;
