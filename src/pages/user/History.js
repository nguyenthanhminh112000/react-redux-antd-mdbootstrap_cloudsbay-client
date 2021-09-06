import React from 'react';
console.log('History outside');
const History = () => {
  console.log('History inside');
  return (
    <div className='container-fluid'>
      {console.log('History inside return')}
      <div className='row'>
        <div className='col'>User history page</div>
      </div>
    </div>
  );
};

export default History;
