import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createComments } from '../../store/posts';

const CreateComment = ({postId}) => {
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async(e) => {
        e.preventDefault();

        const commentData = new FormData()
        commentData.append('postId', postId)
        commentData.append('commentBody', comment)

        const createdComment = await dispatch(createComments(commentData))
        if(createdComment){
        setComment('');
        }

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
            <button type='submit'>Post</button>
          </form>
        </div>
    )

}

export default CreateComment;
