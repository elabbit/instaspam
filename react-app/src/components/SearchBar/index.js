import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getAllUsers } from "../../store/user";


const SearchBar = () => {
  // const dispatch = useDispatch();
  // const users = useSelector(state => state.user.users);
  const [users, setUsers] = useState('');
  const [usersData, setUsersData] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('')


  const fetchUsers = () => {
    fetch('/api/users/all')
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  // console.log(users)

  const handleChange = (searchWord) => {
    // console.log(searchWord)

    if (searchWord) {
      const searchResults = Object.values(users).filter(user => user.username.startsWith(searchWord))
      setUsersData(searchResults);
      setDropdown(true);
      // setSearchInput(searchWord)
    } else {
      setDropdown(false)
    }
  }

  const clickResult = () => {
    setDropdown(false);
    setSearchInput('');
  }
  // console.log(users)

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => handleChange(e.target.value)}
        value={searchInput}
      >
      </input>
      <div>
        {usersData && dropdown ?
          usersData.map(user => (
            <div key={user.id}>
              <Link onClick={() => clickResult} to={`/${user.username}`}>
                {user.username}
              </Link>
            </div>
          ))
          :
          null
        }
      </div>
    </div>
  );
}

export default SearchBar;
