import { Link } from "react-router-dom";
import CreateComment from "../CreateComment";
import LikesModal from "../LikesModal";
import LikeToggle from "../LikeToggle";
import PostModalFeed from "../PostModalFeed"
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
                <div className='feed-action-container'>
                    <div className='feed-actions'>
                        <LikeToggle post={post} sessionUsername={sessionUser.username} />
                        <div className='feed-comment-bubble'><PostModalFeed post={post} type={'bubble'}/></div>
                    </div>
                    <LikesModal likes={post.likes} sessionUser={sessionUser} />
                    <div className='feed-comments'>
                        <div>
                            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                            &nbsp;{post.caption}
                        </div>
                        {Object.keys(post.comments).length > 0 && (
                        <PostModalFeed post={post} type={Object.keys(post.comments).length}/>
                        )}
                    </div>
                    <div>
                        <CreateComment postId={post.id} />
                    </div>
                </div>
            </div>
            :
            null
    )
}

export default PostContainer;
