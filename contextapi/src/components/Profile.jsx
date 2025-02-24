import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const {user}=useContext(UserContext)
  
  if(!user){
      return <h1>Please Login</h1>
  }
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h1>{user.password}</h1>
    </div>
  )
}
