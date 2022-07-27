import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { follow, getUser, unfollow } from "../../store/user";

const FollowButton = ({ sessionUser, matchUsername, matchId }) => {
    const dispatch = useDispatch();
    const [isFollowing, setIsFollowing] = useState();
    const [sameUser, setSameUser] = useState();
    const { username } = useParams();

    useEffect(() => {
        if (sessionUser?.following.find(user => user.username === matchUsername)) {
            setIsFollowing(true)
        }
        if (sessionUser?.username === matchUsername)
            setSameUser(true)

    }, [sessionUser.following, sessionUser.username, matchUsername])

    const onFollow = async (e) => {
        e.preventDefault();
        setIsFollowing(true)
        const followed = await dispatch(follow(matchId))
        if(followed){
            if (followed.username === username) {
                dispatch(getUser(username))
            }
            if (sessionUser.username === username) {
                dispatch(getUser(username))
            }
        }


    }


    const onunFollow = async (e) => {
        e.preventDefault();
        setIsFollowing(false)
        const unfollowed = await dispatch(unfollow(matchId))
        if (unfollowed) {

            if (unfollowed.username === username) {
                dispatch(getUser(username))
            }
            if (sessionUser.username === username) {
                dispatch(getUser(username))
            }
        }

    }

    return (
        !sameUser ?
            !isFollowing ?
                <form onSubmit={onFollow}>
                    <button>Follow</button>
                </form>
                :
                <form onSubmit={onunFollow}>
                    <button>Unfollow</button>
                </form>
            :
            null
    )
}

export default FollowButton
