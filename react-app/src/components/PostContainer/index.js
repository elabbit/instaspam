import { Link } from "react-router-dom";
import CommentDetails from "../CommentDetails";
import CreateComment from "../CreateComment";
import LikesModal from "../LikesModal";
import LikeToggle from "../LikeToggle";
import "./PostContainer.css"

function PostContainer({ post, sessionUser }) {

    console.log('post-info', post)

    return (
        post ?
            <div className='post-container'>
                <div className='feed-user-container'>
                    <img src='https://i.pinimg.com/474x/66/79/db/6679db48d089dd5fe485087094bdfa93.jpg' className='feed-user-image' alt="current user profile image" />
                    <div className='feed-username'>jonathankim</div>
                </div>
                <div className='feed-post-image'>
                    <img className='post-image' src={post.image} alt="" />
                </div>
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
            :
            null
    )
}

export default PostContainer;
