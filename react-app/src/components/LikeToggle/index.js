import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createLike, createUnlike } from "../../store/posts";
import { ReactComponent as Heart } from '../../images/heart.svg';
import { ReactComponent as HeartFilled } from '../../images/heart-fill.svg';


const LikeToggle = ({post, sessionUsername}) => {
    const [like, setLike] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(post.likes.find((user)=> user.username === sessionUsername))
            setLike(true)
    }, [post.likes, sessionUsername])

const onLike = async (e) => {
    e.preventDefault();
    setLike((true))
    await dispatch(createLike(post.id))
}

const onUnlike = async (e) => {
    e.preventDefault();
    setLike(false)
    await dispatch(createUnlike(post.id))
}

    return(
        !like ?
            <form onSubmit={onLike}>
              <button><Heart /></button>
            </form>
            :
            <form onSubmit={onUnlike}>
              <button><HeartFilled /></button>
            </form>

    )
}

export default LikeToggle;
