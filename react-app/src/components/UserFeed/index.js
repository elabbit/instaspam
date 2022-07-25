import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUserFeedPosts } from "../../store/posts";
import PostContainer from "../PostContainer";




const UserFeed = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getUserFeedPosts(sessionUser))
  }, [dispatch, sessionUser])

  const normalPosts = Object.values(posts);
  const postsLength = normalPosts.length;
  const spamPosts = normalPosts.splice(0, 9);
  const followPosts = normalPosts.reverse();
  // console.log(spamPosts)
  // console.log(sortedPosts)
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
    <div className="page-outer">
      <div className="page-spacer"></div>
      <div className="page-container">
        {completeSortedPosts ?
          <div>
            {completeSortedPosts.map((post) => (
              <div key={post.id}>
                <PostContainer post={post} sessionUser={sessionUser} />
              </div>
            ))}

          </div>
          :
          <h3>Loading...</h3>}
      </div>
    </div>
  )
}

export default UserFeed;
