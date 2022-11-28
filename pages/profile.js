import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import authContext from '../context/authContext';
import AuthRoute from '../features/AuthRoute';

const profile = () => {
 
  return (
    <AuthRoute>
      <div>profile</div>
    </AuthRoute>
  )
}

export default profile