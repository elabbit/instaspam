
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import FollowButton from '../FollowButton';



function Following({ following, sessionUser }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button className="profile-modal-bttn" onClick={() => setShowModal(true)}>
                <div><span className='number-bold'>{following?.length}</span> following</div>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="list-modal-container">
                        <div className="list-title">Following</div>
                        <div className="list-users">
                            {following.length ?
                                <>
                                    {following.map((following) => (
                                        <div className="list-user-container" key={following.username}>
                                            <div className="list-user-info">
                                                <img className="list-profile-image" src={following.profileImage} alt=""></img>
                                                <div className='list-profile-name'>
                                                    <Link to={`${following.username}`}>{following.username}</Link>
                                                    <div className="list-fullname">{following.name}</div>
                                                </div>
                                            </div>
                                            <div className="list-bttn-div">
                                                <FollowButton sessionUser={sessionUser} matchUsername={following.username} matchId={following.id} />
                                            </div>

                                        </div>
                                    ))}
                                </>
                                :
                                <div className="no-fol-msg">Find users to follow on the&nbsp;<Link to='/explore'>explore</Link>&nbsp;page.</div>
                            }


                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Following;
