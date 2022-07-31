import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as Hashtag } from "../../images/hashtag.svg";
import "./SearchBar.css"

const SearchBar = () => {
  const [users, setUsers] = useState('');
  const [usersData, setUsersData] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [hashtagsData, setHashtagsData] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const fetchUsers = () => {
    fetch('/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  const fetchHashtags = () => {
    fetch('/api/posts/hashtag/all')
      .then(response => response.json())
      .then(data => setHashtags(data))
  }

  useEffect(() => {
    fetchUsers()
    fetchHashtags()
  }, []);

  const handleChange = (searchWord) => {
    if (searchWord) {
      const searchUserResults = users.users.filter(user => user.username.startsWith(searchWord))
      const searchHashtagResults = hashtags.hashtags.filter(hashtag => hashtag.hashtag.startsWith(searchWord))

      setUsersData(searchUserResults);
      setHashtagsData(searchHashtagResults);
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
        {!searchInput &&
          <Search className="search-icon" />
        }
        <input
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        >
        </input>
      </div>
      <div className={dropdown ? "search-results" : "search-none"}>
        {dropdown &&
          usersData.length ?
          (
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
          )
          :
          <div className={dropdown? "no-show" : "no-hide"} id="no-results">No results found.</div>
        }
        {
          dropdown &&
          hashtagsData.map(hashtag => (
            <div key={hashtag.id} className="search-user">
              <Link onClick={() => clickResult()} to={`/hashtag/${hashtag.hashtag}`} >
                <div>
                  <div className="hashtag-border">
                    <Hashtag />
                  </div>
                </div>
                <div className="search-user-info">
                  <div className="search-username">
                    #{hashtag.hashtag}
                  </div>
                  <div className="search-user-name">
                    {hashtag.postIds.length} posts
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
