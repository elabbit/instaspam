
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import "./LikesModal.css"


function LikesModal({ likes, sessionUserFollowing }) {
    const [showModal, setShowModal] = useState(false);

    const followingUsernames = {};
    sessionUserFollowing.forEach(following => {
        followingUsernames[following.username] = true;
    })

    let followingLike;
    for (const like of likes) {
        if (followingUsernames[like.username]) {
            followingLike = like.username;
            break;
        }
    }

    return (
        <div>
            {(followingLike && likes.length === 1) ? (
                <div>
                    Liked by&nbsp;
                    <Link to={`${followingLike}`}>{followingLike}</Link>
                </div>
            )
                : (followingLike && likes.length === 2) ? (
                    <div>
                        Liked by&nbsp;
                        <Link to={`${followingLike}`}>{followingLike}</Link>
                        &nbsp;and&nbsp;
                        <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                            1 other
                        </button>
                    </div>
                )
                    : (followingLike && likes.length > 2) ? (
                        <div>
                            Liked by&nbsp;
                            <Link to={`${followingLike}`}>{followingLike}</Link>
                            &nbsp;and&nbsp;
                            <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                                {likes.length}
                                others
                            </button>
                        </div>
                    )
                        : (
                            <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>{likes.length} likes</button>
                        )
            }
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="likes-modal-container">
                            {likes.map((like) => (
                                <div className="likes-user-container" key={like.username}>
                                    <img className="likes-profile-image" src={like.profileImage} alt=""></img>
                                    <div>
                                        <Link to={`${like.username}`}>{like.username}</Link>
                                        <div>{like.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Modal>
                )
            }
        </div >
    );
}

export default LikesModal;
