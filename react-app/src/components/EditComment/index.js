import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment } from '../../store/posts';
import Picker from 'emoji-picker-react';
import { ReactComponent as EmojiBox } from '../../images/emoji-box.svg';
import './EditComment.css'

const EditComment = ({ postId, currentComment, hideForm }) => {
    const [comment, setComment] = useState(currentComment.comment);
    const [emojiBox, setEmojiBox] = useState(false);
    const [eventListener, setEventListener] = useState(false);

    const dispatch = useDispatch()
    const commentId = currentComment.id

    const onSubmit = async (e) => {
        e.preventDefault();

        const commentBody = comment
        const updatedComment = await dispatch(updateComment(postId, commentId, commentBody))

        if (updatedComment) {
            hideForm()
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    }

    const handleDocumentClick = (event) => {
        let isEmojiClassFound = false;
        event &&
            event.composedPath() &&
            event.composedPath().forEach(elem => {
                if (elem && elem.classList) {
                    const data = elem.classList.value;
                    if (data.includes("emoji")) {
                        isEmojiClassFound = true;
                    }
                }
            });
        if (isEmojiClassFound === false && event.target.id !== "emojis-btn") {
            setEmojiBox(false);
            setEventListener(false);
            document.removeEventListener("click", handleDocumentClick);
        }
    };

    const onEmojiClick = (event, emojiObject) => {
        setComment((comment) => comment + emojiObject.emoji);
        setEmojiBox(!emojiBox);
    };

    const showEmojiBox = (e) => {
        e.preventDefault();

        if (emojiBox === false && !eventListener) {
            document.addEventListener("click", handleDocumentClick, false);
            setEventListener(true)
        }

        setEmojiBox(!emojiBox);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea
                className="edit-comment-text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name='body'
                    placeholder='Add a comment...'
                    rows='1'
                    required
                    maxLength="1000"
                ></textarea>
                                <div className='edit-emoji-container'>
                 <button id='emojis-btn' onClick={showEmojiBox} className='edit-show-emojis'><EmojiBox /></button>
                 {emojiBox && (
                    <>
                        <div className='edit-emoji-form'>
                            <Picker onEmojiClick={onEmojiClick} />
                        </div>
                    </>
                )}
                </div>
                <div className='edit-bttns-container'>
                <button className="post-modal-edit-delete-buttons" type='submit'>Done</button>
                <button className="post-modal-edit-delete-buttons" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditComment;
