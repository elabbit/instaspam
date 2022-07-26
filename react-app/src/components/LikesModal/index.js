
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
// import FollowButton from '../FollowButton'
import './LikesModal.css'



function LikesModal({ likes, sessionUser }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUserFollowing = sessionUser.following;

    const followingUsernames = {};
    sessionUserFollowing.forEach(following => {
        followingUsernames[following.username] = true;
    })

    let followingLike;
    let followingProfileImage;
    for (const like of likes) {
        if (followingUsernames[like.username]) {
            followingLike = like.username;
            followingProfileImage = like.profileImage;
            break;
        }
    }

    let content;

    switch (true) {
        case (followingLike && likes.length === 1):
            content = (
                <div className='like-info-container'>
                    <Link to={`/${followingLike}`}>
                        <img src={followingProfileImage} className='common-like-image' alt="" />
                    </Link>
                    &nbsp;Liked by&nbsp;
                    <Link to={`/${followingLike}`}>{followingLike}</Link>
                </div>
            )
            break;
        case (followingLike && likes.length === 2):
            content = (
                <div className='like-info-container'>
                    <Link to={`${followingLike}`}>
                        <img src={followingProfileImage} className='common-like-image' alt="" />
                    </Link>
                    &nbsp;Liked by&nbsp;
                    <Link to={`/${followingLike}`}>{followingLike}</Link>
                    &nbsp;and&nbsp;
                    <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                        1 other
                    </button>
                </div>
            )
            break;
        case (followingLike && likes.length > 2):
            content = (
                <div className='like-info-container'>
                    <Link to={`${followingLike}`}>
                        <img src={followingProfileImage} className='common-like-image' alt="" />
                    </Link>
                    &nbsp;Liked by&nbsp;
                    <Link to={`/${followingLike}`}>{followingLike}</Link>
                    &nbsp;and&nbsp;
                    <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>
                        {likes.length - 1}
                        &nbsp;others
                    </button>
                </div>
            )
            break;
        case (followingLike === undefined && likes.length === 1):
            content = (
                <div className='like-info-container'>
                    <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>{likes.length} like</button>
                </div>
            )
            break;
        case (followingLike === undefined && likes.length > 1):
            content = (
                <div className='like-info-container'>
                    <button className="likes-modal-bttn" onClick={() => setShowModal(true)}>{likes.length} likes</button>
                </div>
            )
            break;
        default:
            content = null
            break;
    }

    return (
        <div>
            {content}
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
                                            <Link to={`/${like.username}`}>{like.username}</Link>
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
            )
            }
        </div >
    );
}

export default LikesModal;
