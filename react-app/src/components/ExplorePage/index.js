import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExplorePosts } from "../../store/posts";
import PostModal from "../PostModal";
import "./ExplorePage.css"


const ExplorePage = () => {
  const dispatch = useDispatch();
  // Will replace this useSelector for session user with props in App component
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state => state.posts);
  // console.log(sessionUser)
  console.log(posts)

  useEffect(() => {
    dispatch(getExplorePosts(sessionUser))
  }, [dispatch])

  return (
    posts ?
      <div className="posts-explore-container">
        {Object.values(posts).map((post)=> (
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
