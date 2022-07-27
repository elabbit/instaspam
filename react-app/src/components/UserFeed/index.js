import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts, clearPosts } from "../../store/posts";
import PostContainer from "../PostContainer";
import './UserFeed.css'


const UserFeed = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [postsData, setPostsData] = useState(false);

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

    const normalPosts = Object.values(posts);
    const postsLength = normalPosts.length;
    const spamPosts = normalPosts.splice(0, 9);
    const followPosts = normalPosts.reverse();

    const completeSortedPosts = []
    let spamCount = 0;
    let followCount = 0;
    for (let i = 0; i < postsLength; i++) {
      if (i !== 0 && i % 3 === 0 && spamCount < spamPosts.length) {
        completeSortedPosts.push(spamPosts[spamCount])
        spamCount += 1;
      } else if (i % 3 !== 0) {
        completeSortedPosts.push(followPosts[followCount])
        followCount += 1;
      }
    }


  return (
    (postsData && posts) ? (
      <div className="page-outer">
        <div className="page-spacer"></div>
        <div className="page-container">

          <div className='user-feed-container'>
            {completeSortedPosts.map((post) => (
              <div key={post?.id}>
                <PostContainer post={post} sessionUser={sessionUser} />
              </div>
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
