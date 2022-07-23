import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../store/posts'

const EditPost = () => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editPost = await dispatch(addPost(caption))

        if (editPost) {
            // Implement Modal hideform() when submit and uploaded.
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

export default EditPost;
