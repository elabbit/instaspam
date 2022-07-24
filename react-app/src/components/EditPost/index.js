import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from '../../store/posts'

const EditPost = ({ post }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = new FormData();
        postData.append('postId', post.id)
        postData.append('caption', caption)

        const editedPost = await dispatch(editPost(postData))

        if (editedPost) {
            // Implement Modal hideform() when submit and uploaded.
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            {/* <img src={post.image}/> */}
            <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

export default EditPost;
