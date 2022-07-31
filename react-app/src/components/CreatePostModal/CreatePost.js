import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../store/posts'
import CropEasy from "../Crop/CropEasy";
import ErrorModal from '../ErrorModal';
import { ReactComponent as EmojiBox } from '../../images/emoji-box.svg';
import Picker from 'emoji-picker-react';
import { ReactComponent as Photo } from '../../images/photo.svg';

const CreatePostNew = ({ hideModal }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const [photoURL, setPhotoURL] = useState();
    const [openUpload, setOpenUpload] = useState(true)
    const [openCrop, setOpenCrop] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
    const [emojiBox, setEmojiBox] = useState(false);
    const [eventListener, setEventListener] = useState(false);

    const handleDocumentClick = (event) => {
        let isEmojiClassFound = false;
        event &&
            event.composedPath() &&
            event.composedPath().forEach(elem => {
                if (elem && elem.classList) {
                    const data = elem.classList.value;
                    if (data.includes("emoji")) {
                        isEmojiClassFound = true;
                    }
                }
            });
        if (isEmojiClassFound === false && event.target.id !== "emojis-btn") {
            setEmojiBox(false);
            setEventListener(false);
            document.removeEventListener("click", handleDocumentClick);
        }
    };

    const onEmojiClick = (event, emojiObject) => {
        setCaption((caption) => caption + emojiObject.emoji);
        setEmojiBox(!emojiBox);
    };

    const showEmojiBox = (e) => {
        e.preventDefault();

        if (emojiBox === false && !eventListener) {
            document.addEventListener("click", handleDocumentClick, false);
            setEventListener(true)
        }

        setEmojiBox(!emojiBox);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorsArray = [];
        const formData = new FormData();
        formData.append('image', image)
        formData.append('caption', caption)

        setImageLoading(true);

        const createdPost = await dispatch(addPost(formData))

        if (createdPost && createdPost.errors === undefined) {
            setImageLoading(false)
            hideModal()
        }
        else if (createdPost.errors) {
            errorsArray.push(createdPost.errors)
            setImageLoading(false)
        }
        else {
            setImageLoading(false)
            errorsArray.push("Unknown error, please refresh and try again")
        }
        if (errorsArray.length) {
            setErrors(errorsArray)
            return setShowModal(true);
        }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPhotoURL(URL.createObjectURL(file));
        setOpenUpload(false)
        setOpenCrop(true)
    }

    return (
        <div className="create-post-form-container">
            <form onSubmit={handleSubmit} >
                <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
                <div className="create-post-header">
                    <div className="third"></div>
                    {!openCrop ?

                        <div className="create-post-header-text third">Create New Post</div>
                        :
                        <div className="create-post-header-text third">Crop</div>
                    }
                    <div className="loading-bttn third">
                        {openCreate && (
                            !imageLoading ?
                                <button className="create-post-share-button" type="submit">Share</button>
                                :
                                <div className="create-post-msg">Uploading...</div>
                        )}
                    </div>
                </div>
                <div className="upload-crop-create">
                    {openUpload && (
                        <div className="create-post-image-upload-field">
                            <Photo />
                            <label className="create-image-label" htmlFor="create-post-files">Select from computer</label>
                            <input
                                className="create-post-image-upload-section"
                                id="create-post-files"
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                        </div>

                    )}
                    {openCrop && (
                        <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setImage, setOpenCreate }} />
                    )}

                    {openCreate && (
                        <div className='create-final'>
                            <div className="create-left">
                                <img src={photoURL} alt='' />
                            </div>
                            <div className="create-right">
                                <div className="create-post-profile-pic-username">
                                    <img className="create-post-profile-pic" src={sessionUser.profileImage} alt="" />
                                    <div className="create-post-profile-username">
                                        {sessionUser.username}
                                    </div>
                                </div>
                                <div className="create-txt-emoji">
                                    <textarea
                                        className="create-post-form-caption"
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
                                        placeholder='Write a caption...'
                                        maxLength="1000"
                                    />
                                    <button id='emojis-btn' onClick={showEmojiBox} className='create-show-emojis'><EmojiBox /></button>
                                    {emojiBox && (
                                        <>
                                            <div className='create-emoji-form'>
                                                <Picker onEmojiClick={onEmojiClick} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>


    )
};

export default CreatePostNew;
