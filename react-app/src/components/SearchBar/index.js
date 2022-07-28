import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const SearchBar = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [postsData, setPostsData] = useState([false]);

  return (
    <form>
      <input placeholder="Search"></input>
      <button>Submit</button>
    </form>
  );
}

export default SearchBar;
