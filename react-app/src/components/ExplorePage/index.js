import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExplorePosts } from "../../store/posts";


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
    <div>
      {Object.values(posts).map((post, index) => {
        if (index % 3 == 0) {
          return (
            <div>
              <img src={post?.image} />
            </div>
          )
        } else {
          return (
            <div>
              <img src={post?.image} />
            </div>
          )
        }
      })}
    </div>
    :
    <h3>Loading ...</h3>>
  );

}

export default ExplorePage;
