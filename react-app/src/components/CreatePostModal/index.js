import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePost from './CreatePost';
import {ReactComponent as Create} from "../../images/create.svg"
import './CreatePost.css'

function CreatePostModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-post-bttn" onClick={() => setShowModal(true)}>
      <Create className="icon create-logo"/>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePost hideModal={()=>setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default CreatePostModal;
