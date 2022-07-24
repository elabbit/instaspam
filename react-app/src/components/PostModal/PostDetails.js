import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/posts";
import { removeComment } from "../../store/posts";
import CreateComment from "../CreateComment";
import { Link } from 'react-router-dom';
import EditPost from "../EditPost";



function PostDetails({ post }) {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  const onDelete = async () => {
    const deletedPost = await dispatch(deletePost(post.id))

  }

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
          <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
          <span>{post.caption}</span>
        </div>
        {Object.values(post.comments).map((comment) => (
          <div key={comment.id}>
             <Link to={`${comment.username}`}>{comment.username}</Link>
            <span>{comment.comment}</span>
            {(comment.userId === sessionUser?.id) && (
            <button onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
            )}
          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment postId={post.id}/>
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
