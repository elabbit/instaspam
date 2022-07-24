import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../store/posts";
import CreateComment from "../CreateComment";
import EditComment from "../EditComment";


function PostDetails({ post }) {
  const [showEditComment, setShowEditComment] = useState(false);
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const deleteSpecificComment = async(commentId) => {
    const postId = post.id
    await dispatch(removeComment(commentId, postId))
  }


  return (
    <div className="post-mod-container">
      <div className="post-mod-left">
        <img className="post-mod-image" src={post.image} />
      </div>
      <div className="post-mod-right">
        <div>
        {/* <div>{post.username}</div> */}
        <div>{post.caption}</div>
        </div>
        {Object.values(post.comments).map((comment) => (
          <div key={comment.id}>
            {/* <div>{comment.username}</div> */}
            {!showEditComment && (
            <div>{comment.comment}
            {(comment.userId === sessionUser?.id) && (
              <>
            <button onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
            <button onClick={() => setShowEditComment(true)}>Edit</button>
              </>
            )}
            </div>
            )}
            <>
            {showEditComment && (
              <EditComment
              post={post}
              currentComment={comment}
              hideForm={() => setShowEditComment(false)}
          />
            )}
            </>
          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment postId={post.id}/>
        </div>
      </div>
    </div>
  )
}
export default PostDetails;
