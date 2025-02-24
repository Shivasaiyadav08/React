import { useState,useMemo,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count,setcount] = useState(0)

  useEffect(() => {
    update()
  },[])
  
  const update = () => {
    setcount(count+1)
  }
  
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
        <button onClick={update}
       
        className='bg-red-600 text-white rounded-lg border border-black p-3 px-5 w-auto' > count </button>
        <span>The count is {count}</span>
        
        
      </div>
    </>

  )
}

export default App
