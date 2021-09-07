import React from 'react';
import UserNav from './../../components/nav/UserNav';
console.log('Wishlist outside');
const Wishlist = () => {
  console.log('Wishlist inside');
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <UserNav />
        </div>

        <div className='col'>User Wishlist page</div>
        {console.log('Wishlist inside return')}
      </div>
    </div>
  );
};

export default Wishlist;
