import React, { useEffect } from 'react'
import Router from 'next/router'

const logout = () => {

  useEffect(() => {
    localStorage.removeItem("bonzerCode") && alert("Successfully logged out")
  }, [])
  
  // Router.reload(window.location.pathname)

  return (
    <div>logout</div>
  )
}

export default logout