import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from '../../store/posts'

const CreatePost = ({hideModal}) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image)
        formData.append('caption', caption)

        setImageLoading(true);

        const createdPost = await dispatch(addPost(formData))

        console.log('createdPost-------', createdPost)

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
        <form onSubmit={handleSubmit} >
            {errors.length > 0 && (
                <div>{errors}</div>
                )}
            <input
                type="file"
                accept="image/*"
                onChange={updateImage}
                required
            />
            <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <button type="submit">Upload</button>
            {(imageLoading) && <p>Uploading...</p>}
        </form>
    )
};

export default CreatePost;
