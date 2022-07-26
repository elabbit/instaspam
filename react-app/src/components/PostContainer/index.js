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
                <div className='feed-owner-container'>
                    <img src={post.ownerProfileImage} className='feed-owner-image' alt="post owner profile image" />
                    <div className='feed-owner-username'>{post.ownerUsername}</div>
                </div>
                <div className='feed-image-container'>
                    <img className='feed-post-image' src={post.image} alt="" />
                </div>
                <div className='feed-post-actions'>
                    <LikeToggle post={post} sessionUsername={sessionUser.username} />
                    <span>Insert comment bubble icon</span>
                </div>
                <div>
                    <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                    <span>&nbsp;{post.caption}</span>
                </div>
                {Object.values(post.comments).map((comment) => (
                    <div key={comment.id}>
                        <CommentDetails comment={comment} postId={post.id} sessionUserId={sessionUser.id} />
                    </div>
                ))}
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
