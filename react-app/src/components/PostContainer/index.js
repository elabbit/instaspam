import { Link } from "react-router-dom";
import CreateComment from "../CreateComment";
import LikesModal from "../LikesModal";
import LikeToggle from "../LikeToggle";
import PostModalFeed from "../PostModalFeed";
import Timestamp from "../Timestamp";
import "./PostContainer.css";
import 'linkify-plugin-hashtag';
import Linkify from "linkify-react";

function PostContainer({ post, sessionUser }) {

    const options = {
        formatHref: {
          hashtag: (href) => '/hashtag/' + href.substr(1)
        }
      }
    return (
        post ?
            <div className='post-container'>
                <div className='feed-owner-container'>
                    <img src={post.ownerProfileImage} className='feed-owner-image' alt="" />
                    <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                </div>
                <div className='feed-image-container'>
                    <img className='feed-post-image' src={post.image} alt="" />
                </div>
                <div className='feed-action-container'>
                    <div className='feed-actions'>
                        <LikeToggle post={post} sessionUsername={sessionUser.username} />
                        <div className='feed-comment-bubble'><PostModalFeed post={post} type={'bubble'} /></div>
                    </div>
                    <LikesModal likes={post.likes} sessionUser={sessionUser} />
                    <div className='feed-comments'>
                        <div>
                            <Link to={`${post.ownerUsername}`}>{post.ownerUsername}</Link>
                            &nbsp;<Linkify className="post-container-caption" tagName="span" options={options}>{post.caption}</Linkify>
                        </div>
                        {Object.keys(post.comments).length > 0 && (
                            <PostModalFeed post={post} type={Object.keys(post.comments).length} />
                        )}
                        <Timestamp post={post} />
                    </div>
                    <div className='feed-comment-form'>
                        <CreateComment postId={post.id} />
                    </div>
                </div>
            </div>
            :
            null
    )
}

export default PostContainer;
