import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import UserPage from './components/UserPage';
import UserPosts from './components/UserPosts';
import ExplorePage from './components/ExplorePage';
import CreatePost from './components/CreatePost';
import UserEditForm from './components/UserEditForm';
import About from './components/About'

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
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <ProtectedRoute path='/posts/new' exact={true}>
          <CreatePost />
        </ProtectedRoute>
        <ProtectedRoute path='/explore' exact={true}>
          <ExplorePage />
        </ProtectedRoute>
        <ProtectedRoute path='/accounts/edit'>
          <UserEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/:username' exact={true} >
          <UserPage />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <UserPosts />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
