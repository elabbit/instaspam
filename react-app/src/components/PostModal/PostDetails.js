import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../store/posts";
import CreateComment from "../CreateComment";


function PostDetails({ post }) {
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
            <div>{comment.comment}
            {(comment.userId === sessionUser?.id) && (
            <button onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
            )}
            </div>
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
