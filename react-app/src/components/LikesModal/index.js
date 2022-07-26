
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import FollowButton from '../FollowButton';
import "./LikesModal.css"


function LikesModal({ likes, sessionUser}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                <div>{likes.length} likes</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="list-modal-container">
                        <div className="list-title">Likes</div>
                        {likes.map((like) => (
                            <div className="list-user-container" key={like.username}>
                                <img className="list-profile-image" src={like.profileImage} alt=""></img>
                                <div>
                                    <Link to={`${like.username}`}>{like.username}</Link>
                                    <div className="list-fullname">{like.name}</div>
                                </div>
                                <FollowButton sessionUser={sessionUser} matchUsername={like.username} matchId={like.id}
                                />
                            </div>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default LikesModal;
