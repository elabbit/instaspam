import { useState } from "react";
import EditComment from "../EditComment";
import { Link } from "react-router-dom";
import './CommentDetails.css'
import DeleteCommentModal from "../DeleteCommentModal";

function CommentDetails({ comment, postId, sessionUserId }) {
    const [showEditComment, setShowEditComment] = useState(false);

    return (

        <div className="comment-container">

            <div className="post-modal-profileimage">
                <img src={comment.userProfileImage}  alt="" />
            </div>

            {!showEditComment ?
                <div>
                    <>
                        <div className='actual-comment'>
                            <Link to={`/${comment.username}`}>{comment.username}</Link>
                            <span >{comment.comment}</span>
                        </div>

                        {(comment.userId === sessionUserId) && (
                            <>
                                <div className='button-comment'>
                                    <button className="comment-details-edit-delete-buttons" onClick={() => setShowEditComment(true)}>Edit</button>
                                    <DeleteCommentModal commentId={comment.id} postId={postId}/>
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
