import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../store/posts'

const CreatePost = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('');

    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image)
        formData.append('caption', caption)

        setImageLoading(true);

        const createdPost = await dispatch(addPost(formData))

        if (createdPost) {
            setImageLoading(false)
        } else {
            setImageLoading(false)
            console.log("error")
        }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form onSubmit={handleSubmit} >
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
            <button type="submit">Submit</button>
            {(imageLoading) && <p>Loading...</p>}
        </form>
    )
};

export default CreatePost;
