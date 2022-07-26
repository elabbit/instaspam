import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import UserPage from './components/UserPage';
import ExplorePage from './components/ExplorePage';
import CreatePostModal from './components/CreatePostModal';
import UserEditForm from './components/UserEditForm';
import About from './components/About'
import UserFeed from './components/UserFeed'
import Splash from './components/Splash'
import HashtagPosts from './components/HashtagPosts';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

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
        <Route path='/splash' exact={true}>
          <Splash sessionUser={sessionUser} />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/about' exact={true}>
          <About />
        </ProtectedRoute>
        <ProtectedRoute path='/posts/new' exact={true}>
          <CreatePostModal />
        </ProtectedRoute>
        <ProtectedRoute path='/explore' exact={true}>
          <ExplorePage sessionUser={sessionUser} />
        </ProtectedRoute>
        <ProtectedRoute path='/accounts/edit' exact={true}>
          <UserEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/hashtag/:hashtag' exact={true} >
          <HashtagPosts sessionUser={sessionUser} />
        </ProtectedRoute>
        <ProtectedRoute path='/:username' exact={true} >
          <UserPage sessionUser={sessionUser} />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <UserFeed sessionUser={sessionUser} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
