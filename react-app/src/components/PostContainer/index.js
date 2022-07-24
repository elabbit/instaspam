import { Link } from "react-router-dom";
import CommentDetails from "../CommentDetails";
import CreateComment from "../CreateComment";
import "./PostContainer.css"

function PostContainer({ post, sessionUser }) {

    return (
        <div className='post-conatiner'>
            <img className='post-image' src={post.image} />
            <div>
                <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                <span>{post.caption}</span>
            </div>

            {Object.values(post.comments).map((comment) => (
                <div key={comment.id}>
                    <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser.id} />
                </div>
            ))}
            <div>
                <div>{post.likes} likes</div>
                <CreateComment postId={post.id} />
            </div>
        </div>
    )
}

export default PostContainer;
