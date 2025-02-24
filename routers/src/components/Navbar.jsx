import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-end p-5 bg-blue-300'>
        <nav className='flex gap-5 text-white text-4xl'>
            <NavLink className={(e)=>{return e.isActive?"bg-red-400":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/About"><li>About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Contact"><li>Contact</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/User"><li>User</li></NavLink>
           
        </nav>
    </div>
  )
}

export default Navbar
