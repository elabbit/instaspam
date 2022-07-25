import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/posts";
import CreateComment from "../CreateComment";
import { Link } from 'react-router-dom';
import EditPost from "../EditPost";
import CommentDetails from "../CommentDetails";
import LikeToggle from "../LikeToggle";
import LikesModal from "../LikesModal";

function PostDetails({ post }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [showEditPost, setShowEditPost] = useState(false);

  const onDelete = async () => {
    const deletedPost = await dispatch(deletePost(post.id))
  }

  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} />
      </div>
      <div className="post-mod-right">
        {!showEditPost ?
          <div>
            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
            <span>{post.caption}</span>
            {post.ownerId === sessionUser.id ?
              <div>
                <button onClick={() => setShowEditPost(true)}>Edit</button>
                <button onClick={onDelete}>Delete</button>
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
            <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser?.id}/>
          </div>
        ))}
        <div>
          <div>
          <LikeToggle post={post} sessionUsername={sessionUser.username}/>
          </div>
          <LikesModal likes={post.likes} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    </div >
  )
}
export default PostDetails;
