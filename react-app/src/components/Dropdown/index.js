import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./Dropdown.css"
import { ReactComponent as Profile } from "../images/profile.svg"
import { ReactComponent as Edit } from "../images/edit.svg"


const Dropdown = ({ sessionUser }) => {
    const [dropdown, setDropdown] = useState(false)


    return (
        <div className={dropdown ? "nav-list clicked" : "nav-list"} onClick={() => setDropdown(!dropdown)}>

            <Link onClick={() => setDropdown(false)} to={sessionUser.username}>
                <div className="nav-list-link">
                    <Profile className="icon"/>
                    <span className="nav-list-text">Profile</span>
                </div>
            </Link>
            <Link onClick={() => setDropdown(false)} to="accounts/edit">
                <div className="nav-list-link">
                <Edit className="icon"/>
                <span className="nav-list-text">Edit Info</span>
                </div>
            </Link>
            <div className="nav-list-link">
                <LogoutButton />
            </div>

        </div>

    )

}

export default Dropdown;
