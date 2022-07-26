import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './UserImageUpload.css'


const UserImageUpload = ({ id }) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/auth/profileimage/${id}`, {
            method: "POST",
            body: formData,
        });

        const imageUpload = await res.json();

        if (imageUpload && imageUpload.errors === undefined) {
            setImageLoading(false);
            history.push("/images");
        }
        else if (imageUpload.errors) {
            setErrors(imageUpload.errors)
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
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && (
                    <div>{errors}</div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />
                <button type="submit">Upload</button>
                {(imageLoading) && <p>Uploading...</p>}
            </form>
    )
}

export default UserImageUpload;
