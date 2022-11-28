import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import authContext from '../context/authContext'
import AuthRoute from '../features/AuthRoute'
import { getData, saveData } from '../services/apiServices'

const dashboard = () => {
  const [loading, setloading] = useState(true)

  const {status, user, setUser}  = useContext(authContext);  

  const loadProfile= async () => { 
    setloading(true)
    let res=await getData("auth")
    res && console.log(res);
    if(res){
        if(res.status===200){
            console.log(`${JSON.stringify(res)}`)
            // console.log(res);
            setUser(res.data.user)
        }
        else{
            console.log(`${JSON.stringify(res.response)}`)
        }
    }
    setTimeout(() => {
        setloading(false)
    }, 500); 
    return {status:true}
   }

  useEffect(() => {
    status && loadProfile()
  }, [])
  
  return (
    // <AuthRoute>
      <div>
        {
          !status ? "Not Logged In" :
          loading ? "Loading..." : 
          <div> 
            <h2>Name:  {user.name} </h2>
            <h2>Email:  {user.email} </h2>
            <h2>Role:  {user.role} </h2>
            <h2>Contact:  {user.contact} </h2>
          </div>

        }
      </div>
    // </AuthRoute>
  )
}

export default dashboard