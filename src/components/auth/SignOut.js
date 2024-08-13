// src/components/SignOut.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../features/Auth/AuthSlice';

const SignOut = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
