import React, { useEffect, useState } from 'react'
import { getData, saveData } from '../services/apiServices'

const profile = () => {
  const [loading, setloading] = useState(false)

  const [user, setUser] = useState({})

  const loadProfile= async () => { 
    setloading(true)
    let res=await getData("auth")
    res && console.log(res);
    if(res){
        if(res.status===200){
            alert(`${JSON.stringify(res)}`)
            console.log(res);
            setUser(res.data.user)
        }
        else{
            alert(`${JSON.stringify(res.response.data.error)}`)
        }
    }
    setTimeout(() => {
        setloading(false)
    }, 500); 
    return {status:true}
   }

  useEffect(() => {
    loadProfile()
  }, [])
  
  return (
    <div>My Profile
      {
        user && 
        <div> 
          <h2>Name:  {user.name} </h2>
          <h2>Email:  {user.email} </h2>
          <h2>Role:  {user.role} </h2>
          <h2>Contact:  {user.contact} </h2>
        </div>

      }
    </div>
  )
}

export default profile