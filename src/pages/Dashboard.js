import React, { useContext } from 'react';

import { AuthContext } from '../context/Auth';

const Dashboard = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth.isLoggedIn && (
        <div>
          <h1>Welcome to Dashboard</h1>
          <br />
          <br />
          <br />
          <h3>Hello World</h3>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
