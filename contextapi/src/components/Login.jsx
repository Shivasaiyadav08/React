import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext.js'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassworD] = useState('')

    const {setuser}=useContext(UserContext)

    const handle=(e)=>{
       e.preventDefault()
       setuser({username,password})
    }
  return (
    <div>
      <input type="text"
       placeholder="Username"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />

      {"   "}
       <input type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassworD(e.target.value)}
         /> 


         <button onClick={handle}>
              Login
         </button>
    </div>
  )
}

export default Login
