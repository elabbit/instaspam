import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetails from '../PostModal/PostDetails';
import { ReactComponent as CommentBubble } from "../../images/comment-bubble.svg"
import './PostModalFeed.css'

function PostModalFeed({ post, type }) {
    const [showModal, setShowModal] = useState(false);

    let content;

    switch (true) {
        case (type == 1):
            content = (
                <div className='view-all-comments'>
                    View 1 comment
                </div>
            )
            break;
        case (type >= 2):
            content = (
                <div className='view-all-comments'>
                    View all {type} comments
                </div>
            )
            break;
        case (type === 'bubble'):
            content = (
                <div className='bubble'>
                    <CommentBubble />
                </div>
            )
            break;
        default:
            content = undefined;
    }

    return (
        <div>
            <button className="post-modal-feed-bttn" onClick={() => setShowModal(true)}>
                {content}
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostDetails post={post} />
                </Modal>
            )}
        </div>
    );
}

export default PostModalFeed;
