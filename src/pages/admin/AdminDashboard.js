import React from 'react';
console.log('AdminDashboard outside');
const AdminDashboard = () => {
  console.log('AdminDashboard inside');
  return (
    <div>
      Admin Dashboard
      {console.log('AdminDashboard inside return')}
    </div>
  );
};

export default AdminDashboard;
