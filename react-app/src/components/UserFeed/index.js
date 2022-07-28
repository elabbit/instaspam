import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts, clearPosts } from "../../store/posts";
import PostContainer from "../PostContainer";
import './UserFeed.css'


const UserFeed = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [postsData, setPostsData] = useState([false]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await dispatch(getUserFeedPosts(sessionUser));
      if (postsData) {
        setPostsData(true);
      }
    }
    fetchPosts();

    return dispatch(clearPosts())
  }, [dispatch, sessionUser])


  const sortPosts = (normalPosts) => {
    const spamPosts = normalPosts.splice(0, 9);
    const sorted = []
    if (!normalPosts.length) {
      sorted.push(spamPosts.shift())
      return sorted;
    }
    let count = 0;
    while (normalPosts.length && count < 10) {
      sorted.push(normalPosts.pop())
      if(!normalPosts.length) return sorted;
      sorted.push(normalPosts.pop())
      if(!normalPosts.length || !spamPosts.length) return sorted;
      sorted.push(spamPosts.shift())
      count++;
    }
    return sorted;
  }

  return (
    postsData && posts ? (
      <div className="page-outer">
        <div className="page-spacer"></div>
        <div className="page-container">

          <div className='user-feed-container'>

            {sortPosts(Object.values(posts)).map((post) => (
              post && (
                <div key={post?.id}>
                <PostContainer post={post} sessionUser={sessionUser} />
              </div>
                )
            ))}
          </div>
        </div>
      </div>
    )
      :
      <h3>Loading...</h3>
  )
}

export default UserFeed;
