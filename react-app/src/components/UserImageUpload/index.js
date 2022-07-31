import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/session";
import './UserImageUpload.css'
import ErrorModal from '../ErrorModal';


const UserImageUpload = ({ id, hideForm }) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorsArray = [];
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/auth/profileimage/${id}`, {
            method: "POST",
            body: formData,
        });

        const imageUploadUser = await res.json();

        if (imageUploadUser && imageUploadUser.errors === undefined) {
            setImageLoading(false);
            dispatch(setUser(imageUploadUser))
            hideForm()
        }
        else if (imageUploadUser.errors) {
            errorsArray.push(imageUploadUser.errors)
            setImageLoading(false);
        }
        else {
            errorsArray.push('Unknown error, please refresh and try again.')
        }
        if (errorsArray.length) {
            setErrors(errorsArray)
            return setShowModal(true);
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
            <div className="user-image-container">


                <label className="user-image-label" htmlFor="user-post-file">Choose photo</label>
                <input
                    id="user-post-file"
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />

                {imageLoading ? <div className="user-profile-right">Uploading...</div>
                    :
                    <button className="page-editprofile-upload-btn user-profile-right" type="submit">Upload</button>
                }
            </div>
        </form>
    )
}

export default UserImageUpload;
