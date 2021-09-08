import React from 'react';
console.log('HistoryController outside');
const HistoryController = () => {
  console.log('HistoryController inside');
  return (
    <div>
      HistoryController
      {console.log('HistoryController inside return')}
    </div>
  );
};

export default HistoryController;
