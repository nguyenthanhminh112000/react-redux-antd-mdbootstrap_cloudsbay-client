import React from 'react';
import UserNav from '../../../components/nav/UserNav';
import PasswordController from './PasswordController';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('Password outside');
const Password = () => {
  console.log('Password inside');
  return (
    <>
      {console.log('Password inside return')}
      <DashboardLayout Nav={UserNav} Controller={PasswordController} />;
    </>
  );
};

export default Password;
