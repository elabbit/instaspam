import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateComment = () => {
    const [comment, setComment] = useState('');


    const dispatch = useDispatch();

    const onSubmit = async(e) => {
        e.preventDefault();

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
              maxlength="1000"
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
    )

}

export default CreateComment;
