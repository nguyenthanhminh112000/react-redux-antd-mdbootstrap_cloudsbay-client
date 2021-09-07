import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';
import { checkAdmin } from './../../api/auth';
console.log('Admin outside');
const AdminRoute = (props) => {
  // using hooks
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useSelector((state) => state);

  useEffect(() => {
    console.log('AdminRoute inside useEffect');
    const handleCheckAdmin = async () => {
      try {
        if (user) {
          console.log('handleCheckAdmin');
          await checkAdmin(user.token);
          setIsAdmin(true);
        }
      } catch (error) {
        setIsAdmin(false);
      }
    };
    handleCheckAdmin();
  }, [user]);

  return isAdmin ? <Route {...props} /> : <LoadingToRedirect />;
};

export default AdminRoute;
