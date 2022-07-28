import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComments } from '../../store/posts';
import { ReactComponent as EmojiBox } from '../../images/emoji-box.svg';
import Picker from 'emoji-picker-react';
import './CreateComment.css';

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [emojiBox, setEmojiBox] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const showEmojiBox = (e) => {
    e.preventDefault();

    setEmojiBox(!emojiBox)
  }

  const onChange = (e) => {
    setComment(e.target.value);

    if (e.target.value.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const commentBody = comment;
    const createdComment = await dispatch(createComments(postId, commentBody));
    if (createdComment) {
      setComment('');
      setDisabled(true);
    };

  };


  return (
    <div className='create-comment-form-container'>
      {emojiBox && (
        <div className='emoji-form'>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <form className='create-comment-form' onSubmit={onSubmit}>
        <button onClick={showEmojiBox} className='show-emojis'><EmojiBox /></button>
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
        <button
          className={disabled ? 'create-comment-disabled-button' : 'create-comment-active-button'}
          type='submit'
          disabled={disabled}
        >Post</button>
      </form>
    </div>
  )

}

export default CreateComment;
