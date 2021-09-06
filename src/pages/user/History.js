import React from 'react';
import UserNav from './../../components/nav/UserNav';
console.log('History outside');
const History = () => {
  console.log('History inside');
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <UserNav />
        </div>

        <div className='col'>User history page</div>
        {console.log('History inside return')}
      </div>
    </div>
  );
};

export default History;
