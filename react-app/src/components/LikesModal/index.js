
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import "./LikesModal.css"


function LikesModal({ likes }) {
    const [showModal, setShowModal] = useState(false);
console.log(likes)
    return (
        <div>
            <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                <div>{likes.length} likes</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="likes-modal-container">
                        {likes.map((like) => (
                            <div className="likes-user-container">
                                <img className="likes-profile-image" src={like.profileImage}></img>
                                <div>
                                    <Link to={`${like.username}`}>{like.username}</Link>
                                    <div>{like.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default LikesModal;
