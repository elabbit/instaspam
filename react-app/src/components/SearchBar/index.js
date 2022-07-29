import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select} from "react-select";


const SearchBar = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [postsData, setPostsData] = useState([false]);

  useEffect(()=> {
    const fetch
  } )


  return (
    <form>
      <input placeholder="Search"></input>
      <button>Submit</button>
    </form>
  );
}

export default SearchBar;
