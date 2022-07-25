import { Link } from "react-router-dom";
import CommentDetails from "../CommentDetails";
import CreateComment from "../CreateComment";
import LikesModal from "../LikesModal";
import LikeToggle from "../LikeToggle";
import "./PostContainer.css"

function PostContainer({ post, sessionUser }) {

    return (
        <div className='post-conatiner'>
            <img className='post-image' src={post.image} alt="" />
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
            <LikeToggle post={post} sessionUsername={sessionUser.username} />
          </div>
            <div>
              <LikesModal likes={post.likes} />
                 <CreateComment postId={post.id} />
             </div>
        </div>
    )
}

export default PostContainer;
