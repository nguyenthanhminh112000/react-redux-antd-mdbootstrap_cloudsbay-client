import React from 'react';
import UserNav from '../../../components/nav/UserNav';
import HistoryController from './HistoryController';
import DashboardLayout from './../../layout/DashboardLayout';
console.log('History outside');
const History = () => {
  console.log('History inside');
  return (
    <>
      {console.log('History inside return')}
      <DashboardLayout Nav={UserNav} Controller={HistoryController} />
    </>
  );
};

export default History;
