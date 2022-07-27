
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import FollowButton from '../FollowButton';



function LikesModal({ likes, sessionUser }) {
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
                        <div className="list-users">
                            {likes.map((like) => (
                                <div className="list-user-container" key={like.username}>
                                    <div className="list-user-info">
                                        <img className="list-profile-image" src={like.profileImage} alt=""></img>
                                        <div className='list-profile-name'>
                                            <Link to={`${like.username}`}>{like.username}</Link>
                                            <div className="list-fullname">{like.name}</div>
                                        </div>
                                    </div>
                                    <div className="list-bttn-div">
                                        {/* <FollowButton sessionUser={sessionUser} matchUsername={like.username} matchId={like.id} /> */}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default LikesModal;
