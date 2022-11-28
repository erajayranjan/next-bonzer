import React, { useEffect } from 'react'
import Router from 'next/router'
import { useContext } from 'react';
import authContext from '../context/authContext';

const logout = () => {

  const {status, setStatus, loading, setloading, user, setUser, token, setToken} = useContext(authContext);  
  useEffect(() => {
    localStorage.removeItem("bonzerCode") && alert("Successfully logged out")
    setStatus(false);
    setUser:{};
    setToken:"";
  }, [])
  
  // Router.reload(window.location.pathname)

  return (
    <div>logout</div>
  )
}

export default logout