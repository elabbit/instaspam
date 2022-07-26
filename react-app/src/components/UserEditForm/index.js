import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editUser } from "../../store/session";
import UserImageUpload from "../UserImageUpload";


const UserEditForm = () => {
    const user = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio)
    const history = useHistory();
    const dispatch = useDispatch();
    const id = user.id

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = await dispatch(editUser(id, username, email, name, bio))
        if(data === "success") history.push(`/${username}`)
        if (data) {
            setErrors(data)
        }
    }


    return (
        <div className="page-outer">
        <div className="page-spacer"></div>
        <div className="page-container">
        <div>
            <UserImageUpload id={id}/>
            <form onSubmit={onSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <input
                        type='text'
                        name='email'
                        maxLength='255'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='Email'
                        required
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='name'
                        maxLength='150'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder='Full Name'
                        required
                    ></input>
                </div>
                <div>
                    <input
                        type='text'
                        name='username'
                        maxLength='40'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        placeholder='Username'
                        required
                    ></input>
                </div>
                <div>
                    <textarea
                        type='bio'
                        name='bio'
                        maxLength='1000'
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                        placeholder='Bio'
                    ></textarea>
                </div>
                <button type='submit'>Edit Profile</button>
            </form>

        </div>
</div>
</div>




    )

}

export default UserEditForm
