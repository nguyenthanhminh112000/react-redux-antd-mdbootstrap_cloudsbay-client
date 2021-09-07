import React from 'react';
console.log('Home outside');
const Home = () => {
  console.log('Home inside');
  return (
    <div>
      Home
      {console.log('Home inside return')}
    </div>
  );
};

export default Home;
