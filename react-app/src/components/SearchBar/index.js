import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../images/search.svg";
import "./SearchBar.css"

const SearchBar = () => {
  const [users, setUsers] = useState('');
  const [usersData, setUsersData] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('')

  const fetchUsers = () => {
    fetch('/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  const handleChange = (searchWord) => {
    if (searchWord) {
      const searchResults = users.users.filter(user => user.username.startsWith(searchWord))

      setUsersData(searchResults);
      setDropdown(true);
      setSearchInput(searchWord)
    } else {
      setSearchInput(searchWord)
      setDropdown(false)
    }
  }

  const clickResult = () => {
    setDropdown(false);
    setSearchInput('');
  }

  return (
    <div className="search-bar">
      {dropdown &&
        <div className="search-dropdown-cancel" onClick={() => clickResult()}></div>
      }
      <div className="search-field">
        <Search className="search-icon" />
        <input
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        >
        </input>
      </div>
      <div className={dropdown ? "search-results" : "search-none"}>
        {dropdown &&
          usersData.map(user => (
            <div key={user.id} className="search-user">
              <Link onClick={() => clickResult()} to={`/${user.username}`} >
                <div>
                  <img src={user.profileImage} />
                </div>
                <div className="search-user-info">
                  <div className="search-username">
                    {user.username}
                  </div>
                  <div className="search-user-name">
                    {user.name}
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default SearchBar;
