import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/nav/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import RegisterComplete from './pages/auth/RegisterComplete';
import History from './pages/user/History';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';
import GuestRoute from './components/routes/GuestRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authObserver } from './actions/auth';
import ForgotPassword from './pages/auth/ForgotPassword';
console.log('App outside');
const App = () => {
  //hooks
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log('App inside useEffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('App inside onAuthStateChanged');
      dispatch(authObserver(user, history));
    });
    return () => {
      console.log('unsubcribe');
      return unsubscribe();
    };
  }, []);
  //writing functions
  console.log('App inside');
  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        {console.log('App inside return')}
        <GuestRoute path='/login' exact component={Login} />
        <GuestRoute path='/register' exact component={Register} />
        <GuestRoute
          path='/register/complete'
          exact
          component={RegisterComplete}
        />
        <GuestRoute path='/forgot/password' exact component={ForgotPassword} />
        <UserRoute path='/user/history' exact component={History} />
        <UserRoute path='/user/password' exact component={Password} />
        <UserRoute path='/user/wishlist' exact component={Wishlist} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
};

export default App;
