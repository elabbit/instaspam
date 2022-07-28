import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { removeComment } from "../../store/posts";

function DeleteCommentModal({commentId, postId}) {
    const [showModal, setShowModal] = useState(false);
const dispatch = useDispatch();

const deleteSpecificComment = async (commentId) => {
    await dispatch(removeComment(commentId, postId))
}

    return (
        <>
        <button className="comment-details-edit-delete-buttons" onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="modal-container">
                    <div className="modal-header">
                        <h2>Delete Confirmation</h2>
                        </div>
                        <div className='modal-msg-container'>
                        <div>{`Are you sure you want to remove this comment?`}</div>
                        </div>
                        <div className="modal-btn-container dlt-bttn">
                        <button onClick={() => deleteSpecificComment(commentId)}>Delete</button>
                        </div>
                        <div className="modal-btn-container cnl-bttn">
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteCommentModal;
