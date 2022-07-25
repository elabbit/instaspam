
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetails from './PostDetails';
import './PostModal.css'

function PostModal({post}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="post-modal-bttn" onClick={() => setShowModal(true)}>
        <img className="post-modal-bttn-img"src={post.image} alt=""/>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostDetails post={post} />
        </Modal>
      )}
    </div>
  );
}

export default PostModal;
