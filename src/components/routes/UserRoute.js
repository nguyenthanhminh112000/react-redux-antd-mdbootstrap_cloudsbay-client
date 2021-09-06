import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';
console.log('UserRoute outside');
const UserRoute = (props) => {
  const { user } = useSelector((state) => state);
  return user ? <Route {...props} /> : <LoadingToRedirect />;
};

export default UserRoute;
