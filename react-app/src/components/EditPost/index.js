import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from '../../store/posts'

const EditPost = ({ post, setShowEditPost }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const postData = new FormData();
        // postData.append('postId', post.id)
        // postData.append('caption', caption)

        const postId = post.id
        const editedPost = await dispatch(editPost(postId, caption))

        if (editedPost) {
            // Implement Modal hideform() when submit and uploaded.
            setShowEditPost(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            {/* <img src={post.image}/> */}
            <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                maxLength="1000"
            />
            <button type="submit">Done</button>
            <button onClick={() => setShowEditPost(false)}>Cancel</button>
        </form>
    )
};

export default EditPost;
