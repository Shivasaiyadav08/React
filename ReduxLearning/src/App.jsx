
import Navbar from "./components/Navbar"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiple } from './redux/counter/counterSlice'

function App() {
 const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)

  return (
    <>
    <Navbar/>
      <div>
        <button onClick={()=>dispatch(increment())}>-</button>
         {count}
         <button>=</button>
      </div>
    </>
  )
}

export default App

