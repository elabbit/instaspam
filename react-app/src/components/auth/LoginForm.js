import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import ErrorModal from '../ErrorModal';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (email.length && password.length) {
      setDisabled(false);
    } else {
      setDisabled(true)
    }

  }, [email, password])




  const onLogin = async (e) => {
    e.preventDefault();
    const errorsArray = [];
    const data = await dispatch(login(email, password));
    if (data) {
      errorsArray.push(...data)
    }
    if (errorsArray.length) {
      setErrors(errorsArray)
      return setShowModal(true);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
      <div>
        <input
          name='email'
          type='text'
          placeholder='Email'
          className='page-splash-content-input'
          value={email}
          onChange={updateEmail}
          required
        />
      </div>
      <div>
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='page-splash-content-input'
          value={password}
          onChange={updatePassword}
          required
        />
        <div>
          <button className={disabled ? 'page-splash-login-btn dis-log-signup' : 'page-splash-login-btn'} type='submit' disabled={disabled}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
