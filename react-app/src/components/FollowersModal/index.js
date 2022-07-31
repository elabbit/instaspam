
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import FollowButton from '../FollowButton';



function Followers({ followers, sessionUser }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="profile-modal-bttn" onClick={() => setShowModal(true)}>
                <div><span className='number-bold'>{followers?.length}</span> followers</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="list-modal-container">
                        <div className="list-title">Followers</div>
                        <div className="list-users">
                            {followers.length ?
                                <>
                                    {followers.map((follower) => (
                                        <div className="list-user-container" key={follower.username}>
                                            <div className="list-user-info">
                                                <img className="list-profile-image" src={follower.profileImage} alt=""></img>
                                                <div className='list-profile-name'>
                                                    <Link to={`${follower.username}`}>{follower.username}</Link>
                                                    <div className="list-fullname">{follower.name}</div>
                                                </div>
                                            </div>
                                            <div className="list-bttn-div">
                                                <FollowButton sessionUser={sessionUser} matchUsername={follower.username} matchId={follower.id} />
                                            </div>
                                        </div>
                                    ))
                                    }
                                </>
                                :
                                <div className="no-fol-msg">No current followers.</div>
                            }
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Followers;
