import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FollowButton = ({ sessionUser, postUserData }) => {
    const dispatch = useDispatch();
    const [isFollowing, setIsFollowing] = useState(false);
    console.log(postUserData.followers.map(user => console.log(user)))
    console.log(postUserData)
    console.log(sessionUser)



    useEffect(()=>{
        if(postUserData.followers.find(user => user.username[sessionUser.username] === sessionUser.username)){
            setIsFollowing(true)
        } else {setIsFollowing(false)}
    },[])



    const onSubmit = async (e) => {
        e.preventDefault();

        // const commentData = new FormData()
        // commentData.append('postId', postId)
        // commentData.append('commentBody', comment)

        // await dispatch(updateComment(commentData, commentId))

    }

    return (
        <form onSubmit={onSubmit}>
            {!isFollowing ?
            <button type="submit" onClick={()=> setIsFollowing(true)}>Follow</button>
                : <button type="submit" onClick={()=> setIsFollowing(false)}>unFollow</button> }

        </form>
    )
}

export default FollowButton
