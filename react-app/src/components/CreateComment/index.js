import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createComments } from '../../store/posts';
import './CreateComment.css'

const CreateComment = ({postId}) => {
    const [comment, setComment] = useState('');
    const [disabled, setDisabled] = useState(true)
    const [className, setClassName] = useState('create-comment-disabled-button')

    const dispatch = useDispatch();

    const onChange = (e) => {
      setComment(e.target.value)

      if (e.target.value.length === 0) {
        setDisabled(true)
        setClassName('create-comment-disabled-button')
      } else {
        setDisabled(false)
        setClassName('create-comment-active-button')
      }
    }

    const onSubmit = async(e) => {
        e.preventDefault();

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
              onChange={onChange}
              name='body'
              placeholder='Add a comment...'
              rows='1'
              required
              maxLength="1000"
            ></textarea>
            <button className={className} type='submit' disabled={disabled}>Post</button>
          </form>
        </div>
    )

}

export default CreateComment;
