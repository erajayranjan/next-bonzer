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
        user && user.name && <h2>Name:  {user.name} </h2>
      }
    </div>
  )
}

export default profile