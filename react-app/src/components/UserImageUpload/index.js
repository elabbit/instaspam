import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/session";
import './UserImageUpload.css'


const UserImageUpload = ({ id }) => {

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
                    {(sucess) && <p>Image Uploaded!</p>}
                </form>
    )
}

export default UserImageUpload;
