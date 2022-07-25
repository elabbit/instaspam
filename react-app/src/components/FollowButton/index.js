import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../store/user";

const FollowButton = ({ sessionFollowing, matchUsername, matchId }) => {
    const dispatch = useDispatch();
    const [isFollowing, setIsFollowing] = useState();

    useEffect(() => {
        if (sessionFollowing.find(user => user.username === matchUsername)){
            setIsFollowing(true)
        }

        console.log('CHECK!!!!!!!!!')
        console.log('FIND!!!!!!!!!!!!', sessionFollowing.find(user => user.username === matchUsername))
    }, [sessionFollowing, matchUsername])

    const onFollow = async (e) => {
        e.preventDefault();
        setIsFollowing(true)
        await dispatch(follow(matchId))
    }


    const onunFollow = async (e) => {
        e.preventDefault();
        setIsFollowing(false)
        await dispatch(unfollow(matchId))
    }

    return (
        !isFollowing ?
            <form onSubmit={onFollow}>
                <button>Follow</button>
            </form>
            :
            <form onSubmit={onunFollow}>
                <button>Unfollow</button>
            </form>
    )
}

export default FollowButton
