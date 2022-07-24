import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePost from './CreatePost';

function CreatePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePost hideModal={()=>setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default CreatePostModal;
