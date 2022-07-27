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

        !showEditComment ?
            <div>
                <Link to={`${comment.username}`}>{comment.username}</Link>
                <span>{comment.comment}</span>

                {(comment.userId === sessionUserId) && (
                    <>
                        <button className="comment-details-edit-delete-buttons" onClick={() => setShowEditComment(true)}>Edit</button>
                        <button className="comment-details-edit-delete-buttons" onClick={() => deleteSpecificComment(comment.id)}>Delete</button>
                    </>
                )}
            </div>
            :
            <EditComment postId={postId} currentComment={comment} hideForm={() => setShowEditComment(false)} />

    )
}

export default CommentDetails;
