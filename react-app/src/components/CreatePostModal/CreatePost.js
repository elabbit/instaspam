import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../store/posts'

const CreatePost = ({ hideModal }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            setErrors(createdPost.errors)
            setImageLoading(false)
        }
        else {
            setImageLoading(false)
            setErrors("Unknown error, please refresh and try again")
        }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div className="create-post-form-container">
            <form onSubmit={handleSubmit} >
                {errors.length > 0 && (
                    <div>{errors}</div>
                )}
                <div className="create-post-header">
                    <div>           </div>
                    <div className="create-post-header-text">Create New Post</div>
                    <div>
                        <button className="create-post-share-button" type="submit">Share</button>
                    </div>
                </div>
                <div className="create-post-top">
                    <div className="create-post-profile-pic-username">
                        <img className="create-post-profile-pic" src={sessionUser.profileImage} />
                        <div className="create-post-profile-username">
                            {sessionUser.username}
                        </div>
                    </div>
                    <div className="create-post-fields">
                        <div className="create-post-image-upload-field">
                            <label className="image-label" for="create-post-files">Select from computer</label>
                            <input
                                className="create-post-image-upload-section"
                                id="create-post-files"
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                                required
                            />
                        </div>
                    </div>

                </div>
                <div className="create-post-bottom">

                    <div>
                        <textarea
                            className="create-post-form-caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder='Write a caption...'
                            maxLength="1000"
                        />
                    </div>
                </div>
                {(imageLoading) && <p>Uploading...</p>}
            </form>
        </div>
    )
};

export default CreatePost;
