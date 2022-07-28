import { useState } from "react";
import EditComment from "../EditComment";
import { removeComment } from "../../store/posts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './CommentDetails.css'

function CommentDetails({ comment, postId, sessionUserId }) {
    const [showEditComment, setShowEditComment] = useState(false);
    const dispatch = useDispatch();


    const deleteSpecificComment = async (commentId) => {
        await dispatch(removeComment(commentId, postId))
    }

    return (

        <div className="comment-container">

            <div className="post-modal-profileimage">
                <img src={comment.userProfileImage}  alt="" />
            </div>

            {!showEditComment ?
                <div>
                    <>
                        <div className='actual-comment'>
                            <Link to={`${comment.username}`}>{comment.username}</Link>
                            <span >{comment.comment}</span>
                        </div>

                        {(comment.userId === sessionUserId) && (
                            <>
                                <div className='button-comment'>
                                    <button className="comment-details-edit-delete-buttons" onClick={() => setShowEditComment(true)}>Edit</button>
                                    <button className="comment-details-edit-delete-buttons" onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
                                </div>
                            </>
                        )}
                    </>
                </div>
                :
                <EditComment postId={postId} currentComment={comment} hideForm={() => setShowEditComment(false)} />}
        </div>

    )
}

export default CommentDetails;
