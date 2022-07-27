import { Link } from "react-router-dom";
import CommentDetails from "../CommentDetails";
import CreateComment from "../CreateComment";
import LikesModal from "../LikesModal";
import LikeToggle from "../LikeToggle";
import "./PostContainer.css"

function PostContainer({ post, sessionUser }) {

    return (
        post ?
        <div className='post-container'>
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
              <LikesModal likes={post.likes} sessionUser={sessionUser}/>
                 <CreateComment postId={post.id} />
             </div>
        </div>
        :
        null
    )
}

export default PostContainer;
