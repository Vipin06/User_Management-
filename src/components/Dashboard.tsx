import React from 'react';
import { useAppDispatch } from '../hooks';
import { signOut } from '../redux/userSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
