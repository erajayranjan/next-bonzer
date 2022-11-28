import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import authContext from '../context/authContext';

const AuthRoute = ({children}) => {
  const {status,  user} = useContext(authContext);  
  const router = useRouter()
  useEffect(() => {
    !status  && router.push("sign-in");
  }, [])
  return (
    <>
        {children}
    </>
  )
}

export default AuthRoute