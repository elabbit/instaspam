import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetails from '../PostModal/PostDetails';
import { ReactComponent as CommentBubble } from "../../images/comment-bubble.svg"
import './PostModalFeed.css'

function PostModalFeed({ post, type }) {
    const [showModal, setShowModal] = useState(false);

    let content;

    switch (true) {
        case (type == 0):
            content = null
            break;
        case (type == 1):
            content = (
                <>
                    View 1 comment
                </>
            )
            break;
        case (type >= 2):
            content = (
                <>
                    View all {type} comments
                </>
            )
            break;
        case (type === 'bubble'):
            content = (
                <CommentBubble />
            )
            break;
        default:
            console.log('none');
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
