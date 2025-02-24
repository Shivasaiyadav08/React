import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Themebtn from './components/Themebtn'
import { ThemeProvider } from './context/theme'
import { use } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }
  useEffect(() => {
    if(themeMode === "light"){
     
      document.querySelector(".theme").classList.remove("bg-black","text-white")
      document.querySelector(".theme").classList.add("bg-white","text-black")
    }else{
      
      document.querySelector(".theme").classList.remove("bg-white","text-black")
       document.querySelector(".theme").classList.add("bg-[#242424]","text-white")
    }
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className='bg-white text-black w-full h-screen flex flex-col justify-center items-center p-11'>
      <Themebtn/>
      <Card/>
    </div>
    </ThemeProvider>
  )
}

export default App
