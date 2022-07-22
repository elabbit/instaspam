import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
<<<<<<< HEAD
import UserPage from './components/UserPage';
=======
import UserFeed from './components/UserFeed';
>>>>>>> 507ad133d8844fa4c8ccdfe69443731a656e6a1e

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
<<<<<<< HEAD
        <ProtectedRoute path='/:username' exact={true} >
          <UserPage/>
=======
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
>>>>>>> 507ad133d8844fa4c8ccdfe69443731a656e6a1e
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <UserFeed />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
