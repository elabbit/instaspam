import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editUser } from "../../store/session";
import UserImageUpload from "../UserImageUpload";
import './UserEditForm.css'


const UserEditForm = () => {
    const user = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);
    const [displayUpload, setDisplayUpload] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const id = user.id;
    const profilePic = user.profileImage;

    console.log(user)

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = await dispatch(editUser(id, username, email, name, bio))
        if (data === "success") history.push(`/${username}`)
        if (data) {
            setErrors(data)
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/${user.username}`)

    }


    return (
        <div className="page-outer">
            <div className="page-spacer"></div>
            <div className="page-container">
                <div className="page-editprofile-form-container">
                    <div className="page-editprofile-title">Edit Profile</div>
                    <div className="page-editprofile-userinfo">
                        <div className="page-editprofile-pic">
                            <img src={profilePic} alt='profilepic' className='page-editprofile-profilepic'></img>
                        </div>
                        <div className="page-editprofile-usernameandupload">
                            <div className="page-editprofile-username">
                                {/* {user.username} */}


                            {!displayUpload ?
                                <button className='page-editprofile-pic-btn' onClick={() => setDisplayUpload(true)}>Change profile photo</button>
                                : <UserImageUpload id={id} hideForm={() => setDisplayUpload(false)} />}

                                </div>
                        </div>
                    </div>
                    <div>
                    <form className="page-editprofile-form" onSubmit={onSubmit}>
                        <div>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className="page-editprofile-formlabelandinput">
                            <div className="page-editprofile-formimput-container">
                            <label htmlFor="email" className="page-editprofile-formlabel">Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    maxLength='255'
                                    className="page-editprofile-formimput"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    placeholder='Email'
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="page-editprofile-formlabelandinput">
                            <div className="page-editprofile-formimput-container">
                                <label htmlFor="name" className="page-editprofile-formlabel">Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    maxLength='150'
                                    className="page-editprofile-formimput"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    placeholder='Full Name'
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="page-editprofile-formlabelandinput">
                            <div className="page-editprofile-formimput-container">
                            <label htmlFor="username" className="page-editprofile-formlabel">Username</label>
                                <input
                                    type='text'
                                    name='username'
                                    maxLength='40'
                                    className="page-editprofile-formimput"
                                    onChange={e => setUsername(e.target.value)}
                                    value={username}
                                    placeholder='Username'
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="page-editprofile-formlabelandinput">
                            <div className="page-editprofile-formimput-container">
                            <label htmlFor="bio" className="page-editprofile-formlabel">Bio</label>
                                <textarea
                                    type='bio'
                                    name='bio'
                                    maxLength='1000'
                                    className="page-editprofile-formimput-bio"
                                    onChange={e => setBio(e.target.value)}
                                    value={bio}
                                    placeholder='Bio'
                                ></textarea>
                            </div>
                        </div>
                        <button className="page-editprofile-submit-btn" type='submit'>Submit</button>
                        <button className="page-editprofile-submit-btn" type='button' onClick={handleCancel}>Cancel</button>
                    </form>
                    </div>

                </div>
            </div>
        </div>




    )

}

export default UserEditForm
