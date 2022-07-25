import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExplorePosts, clearPosts } from "../../store/posts";
import PostModal from "../PostModal";
import "./ExplorePage.css"

const ExplorePage = ({ sessionUser }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const postList = Object.values(posts);

  //shuffles when adding or removing comments/likes, need to use CSS to shuffle
  // postList.sort(() => Math.random() - 0.5)

  useEffect(() => {
    dispatch(getExplorePosts(sessionUser))
    return dispatch(clearPosts())
  }, [dispatch, sessionUser])

  return (
    posts ?
      <div className="posts-explore-container">
        {postList.map((post) => (
          <div key={post.id}>
            <PostModal post={post} />
          </div>
        ))}
      </div>
      :
      <h3>Loading...</h3>
  )
}

export default ExplorePage;
