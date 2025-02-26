import React from 'react'
import useTheme from '../context/theme'

function Themebtn() {
   const {themeMode,darkTheme,lightTheme}=useTheme()
   const onchangeTheme=(e)=>{
        if(e.target.checked){
            darkTheme()
        }else{
            lightTheme()
        }
    }

  return (
    <div>

        <label class="relative flex justify-between items-center group p-2 text-xl">
        <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
         value=""
         onChange={onchangeTheme}
         checked={themeMode === "dark" ? true : false}
         />
        <span class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
      </label>
      
     
    </div>
  )
}

export default Themebtn
