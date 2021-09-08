import React from 'react';
import UserNav from '../../../components/nav/UserNav';
import WishlistController from './WishlistController';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('Wishlist outside');
const Wishlist = () => {
  console.log('Wishlist inside');
  return (
    <>
      <DashboardLayout Nav={UserNav} Controller={WishlistController} />;
      {console.log('Wishlist inside return')}
    </>
  );
};

export default Wishlist;
