import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/posts";
import { removeComment } from "../../store/posts";
import CreateComment from "../CreateComment";
import EditComment from "../EditComment";
import { Link } from 'react-router-dom';
import EditPost from "../EditPost";

function PostDetails({ post }) {
  const [showEditComment, setShowEditComment] = useState(false);
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [showEditPost, setShowEditPost] = useState(false);

  const onDelete = async () => {
    const deletedPost = await dispatch(deletePost(post.id))
  }

  const deleteSpecificComment = async (commentId) => {
    const postId = post.id
    await dispatch(removeComment(commentId, postId))
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
            {!showEditComment && (
              <>
                <Link to={`${comment.username}`}>{comment.username}</Link>
                <span>{comment.comment}</span>

                {(comment.userId === sessionUser?.id) && (
                  <>
                    <button onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
                    <button onClick={() => setShowEditComment(true)}>Edit</button>
                  </>
                )}
              </>
            )}
            <>
              {showEditComment && (
                <EditComment
                  post={post}
                  currentComment={comment}
                  hideForm={() => setShowEditComment(false)} />
              )}
            </>

          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment postId={post.id} />
        </div>
      </div>
    </div >
  )
}
export default PostDetails;
