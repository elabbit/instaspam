import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../store/user";

const FollowButton = ({ sessionUser, postUserData }) => {
    const dispatch = useDispatch();
    const [isFollowing, setIsFollowing] = useState(false);
    console.log(postUserData.followers.map(user => console.log(user)))
    console.log(postUserData)
    console.log(sessionUser)



    useEffect(() => {
        if (postUserData.followers.find(user => user.username[sessionUser.username] === sessionUser.username)) {
            setIsFollowing(true)
        }
    }, [])



    const onFollow = async (e) => {
        e.preventDefault();

        const following = await dispatch(follow(postUserData.id))

        if (following) {
            setIsFollowing(true)
        }
    }


    const onunFollow = async (e) => {
        e.preventDefault();

        const unfollowing = await dispatch(unfollow(postUserData.id))

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
