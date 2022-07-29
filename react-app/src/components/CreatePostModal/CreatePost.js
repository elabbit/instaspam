import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../store/posts'
import CropEasy from "../Crop/CropEasy";
import ErrorModal from '../ErrorModal';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image)
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
                            {/* <label className="image-label" for="create-post-files">Upload image:</label> */}
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
                                <div>
                                    <img></img>
                                    <div className="create-username"></div>
                                </div>
                                <textarea
                                    className="create-post-form-caption"
                                    value={caption}
                                    onChange={(e) => setCaption(e.target.value)}
                                    placeholder='Write a caption...'
                                    maxLength="1000"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>


    )
};

export default CreatePostNew;
