import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Navbar() {
const dispatch=useDispatch()
const count=useSelector((state)=>state.counter.value)

  return (
    <div>
      hiiiii
    </div>
  )
}

export default Navbar
