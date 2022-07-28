import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import ErrorModal from '../ErrorModal';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(email, name, username, password, repeatPassword));
    if (data) {
      setErrors(data)
      if (errors.length) {
        return setShowModal(true);
      }
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
      <div>
        <input
          type='text'
          name='email'
          maxLength='255'
          onChange={updateEmail}
          className='page-splash-content-input'
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
          onChange={updateName}
          className='page-splash-content-input'
          value={name}
          placeholder='Full Name'
          required
        ></input>
      </div>
      <div>
        <input
          type='text'
          name='username'
          maxLength='30'
          onChange={updateUsername}
          className='page-splash-content-input'
          value={username}
          placeholder='Username'
          required
        ></input>
      </div>
      <div>
        <input
          type='password'
          name='password'
          maxLength='255'
          onChange={updatePassword}
          className='page-splash-content-input'
          value={password}
          placeholder='Password'
          required
        ></input>
      </div>
      <div>
        <input
          type='password'
          name='repeat_password'
          maxLength='255'
          onChange={updateRepeatPassword}
          className='page-splash-content-input'
          value={repeatPassword}
          required={true}
          placeholder='Confirm Password'
        ></input>
      </div>
      <button type='submit' className='page-splash-login-btn'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
