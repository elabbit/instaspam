import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPosts, getHashtagPosts } from "../../store/posts";
import UserPosts from "../UserPosts";
import './HashtagPosts.css'

const HashtagPosts = () => {
    const { hashtag } = useParams();
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getHashtagPosts(hashtag))
        return dispatch(clearPosts())
    }, [dispatch, hashtag])


    return (
        <div className="page-outer">
            <div className="page-spacer"></div>
            <div className="page-container">
                <div className='hashtag-posts-container'>
                    <div className='hashtag-posts-header'>
                        <div className="hashtag-title">
                        {`#${hashtag.toLowerCase()}`}
                        </div>
                        <div className="hashtag-count">
                            <span className='hashtag-count-number'>{Object.keys(posts).length}</span> posts
                        </div>
                    </div>
                    <UserPosts posts={posts} />
                </div>
            </div>
        </div>
    )


}


export default HashtagPosts;
