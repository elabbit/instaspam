import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from '../../store/posts'
import Picker from 'emoji-picker-react';
import { ReactComponent as EmojiBox } from '../../images/emoji-box.svg';
import './EditPost.css'

const EditPost = ({ post, setShowEditPost }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption);
    const [emojiBox, setEmojiBox] = useState(false);
    const [eventListener, setEventListener] = useState(false);

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
        setCaption((caption) => caption + emojiObject.emoji);
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const postId = post.id
        const editedPost = await dispatch(editPost(postId, caption))

        if (editedPost) {
            // Implement Modal hideform() when submit and uploaded.
            setShowEditPost(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="edit-txt-emoji">
                <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    maxLength="1000"
                    className="edit-post-text"
                />
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
                    <button className="post-modal-edit-delete-buttons" type="submit">Done</button>
                    <button className="post-modal-edit-delete-buttons" onClick={() => setShowEditPost(false)}>Cancel</button>
                </div>
            </div>
        </form>
    )
};

export default EditPost;
