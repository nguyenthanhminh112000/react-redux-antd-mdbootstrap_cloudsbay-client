import React from 'react';
console.log('WishlistController outside');
const WishlistController = () => {
  console.log('WishlistController inside');
  return (
    <div>
      WishlistController
      {console.log('WishlistController inside return')}
    </div>
  );
};

export default WishlistController;
