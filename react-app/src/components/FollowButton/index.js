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
    }, [sessionFollowing])

    const onFollow = async (e) => {
        e.preventDefault();

        const following = await dispatch(follow(matchId))

        if (following) {
            setIsFollowing(true)
        }
    }


    const onunFollow = async (e) => {
        e.preventDefault();

        const unfollowing = await dispatch(unfollow(matchId))

        if (unfollowing) {
            setIsFollowing(false)
        }
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
