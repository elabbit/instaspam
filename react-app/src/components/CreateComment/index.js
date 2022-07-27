import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createComments } from '../../store/posts';
import './CreateComment.css'

const CreateComment = ({postId}) => {
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async(e) => {
        e.preventDefault();

        // const commentData = new FormData()
        // commentData.append('postId', postId)
        // commentData.append('commentBody', comment)
        const commentBody = comment
        const createdComment = await dispatch(createComments(postId, commentBody))
        if(createdComment){
        setComment('');
        }

    }


    return (
        <div className='create-comment-form-container'>
            <form className='create-comment-form' onSubmit={onSubmit}>
            <textarea
              className='create-comment-comment-field'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name='body'
              placeholder='Add a comment...'
              rows='1'
              required
              maxLength="1000"
            ></textarea>
            <button className='create-comment-post-button' type='submit'>Post</button>
          </form>
        </div>
    )

}

export default CreateComment;
