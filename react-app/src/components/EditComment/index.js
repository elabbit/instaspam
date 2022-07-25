import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment } from '../../store/posts';

const EditComment = ({ postId, currentComment, hideForm }) => {
    const [comment, setComment] = useState(currentComment.comment);

    const dispatch = useDispatch()
    const commentId = currentComment.id

    const onSubmit = async (e) => {
        e.preventDefault();

        const commentData = new FormData()
        commentData.append('postId', postId)
        commentData.append('commentBody', comment)

        const updatedComment = await dispatch(updateComment(commentData, commentId))

        if (updatedComment) {
            hideForm()
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    }




    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name='body'
                    placeholder='Add a comment...'
                    rows='1'
                    required
                    maxLength="1000"
                ></textarea>
                <button type='submit'>Edit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default EditComment;
