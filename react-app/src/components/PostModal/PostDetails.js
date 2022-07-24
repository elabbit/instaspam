import CreateComment from "../CreateComment";
import { Link } from 'react-router-dom';


function PostDetails({ post }) {
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
          </div>
        ))}
        <div>
          <div>{post.likes} likes</div>
          <CreateComment />
        </div>
      </div>
    </div>
  )
}
export default PostDetails;
