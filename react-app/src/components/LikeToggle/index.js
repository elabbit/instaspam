import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createLike, createUnlike } from "../../store/posts";


const LikeToggle = ({post, sessionUsername}) => {
    const [like, setLike] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(post.likes.find((user)=> user.username === sessionUsername))
            setLike(true)
    }, [])

const onLike = async (e) => {
    e.preventDefault();
    setLike((true))
    const data = await dispatch(createLike(post.id))
}

const onUnlike = async (e) => {
    e.preventDefault();
    setLike(false)
    const data = await dispatch(createUnlike(post.id))
}

    return(
        !like ?
            <form onSubmit={onLike}>
              <button>Like</button>
            </form>
            :
            <form onSubmit={onUnlike}>
              <button>Unlike</button>
            </form>

    )
}

export default LikeToggle;
