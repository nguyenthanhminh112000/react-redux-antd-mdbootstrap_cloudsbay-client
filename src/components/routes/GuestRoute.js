import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';
console.log('UserRoute outside');
const GuestRoute = (props) => {
  const { user } = useSelector((state) => state);
  return !user ? <Route {...props} /> : <LoadingToRedirect />;
};

export default GuestRoute;
