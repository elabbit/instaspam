
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetails from './PostDetails';

function PostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostDetails />
        </Modal>
      )}
    </>
  );
}

export default PostModal;
