import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/session";
import './UserImageUpload.css'


const UserImageUpload = ({ id, hideForm }) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [sucess, setSucess] = useState()
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])
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
            setSucess(true)
            dispatch(setUser(imageUploadUser))
            hideForm()
        }
        else if (imageUploadUser.errors) {
            setErrors(imageUploadUser.errors)
            setImageLoading(false);
        }
        else {
            setErrors('Unknown error, please refresh and try again.')
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form className="edit-profile-image-form" onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <div>{errors}</div>
            )}
            <div className="edit-profile-photo-field">
                <label className="edit-profile-image-upload-label" for="edit-profile-photo-upload">Choose photo</label>
                <input
                    id="edit-profile-photo-upload"
                    type="file"
                    accept="image/*"
                    className="edit-profile-image-upload-section"
                    onChange={updateImage}
                />
                <button className="page-editprofile-upload-btn" type="submit">Upload</button>
                {(imageLoading) && <p>Uploading...</p>}
                {(sucess) && <p>Image Uploaded!</p>}
                {/* <button className="page-editprofile-upload-btn" type='button' onClick={()=> hideForm()}>Cancel</button> */}
            </div>
        </form>
    )
}

export default UserImageUpload;
