import React, { useState } from 'react'
import { useTodo } from '../contexts'


function TodoItem({todo}) {
    const [isEditable,setisEditable]=useState(false)
    const [todomsg,setTodomsg]=useState(todo.todo)

    
    const {updateTodo,deleteTodo,toggleComplete } = useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todomsg})
        setisEditable(false)
    }
   
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }
    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input type="checkbox"
            checked={todo.isCompleted}
            className='cursor-pointer'
            onChange={toggleCompleted}
            />
            <input type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"}`}
                value={todomsg}
                onChange={(e)=>setTodomsg(e.target.value)}
                readOnly={!isEditable}
            />

           <button onClick={()=>{
            if(todo.completed) return
            if(isEditable){
               editTodo()
            }
            else setisEditable((prev)=>!prev)

           }}
           disabled={todo.completed}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto">
                
                {isEditable ? "📁": "✏️"}
            </button>


            <button 
            onClick={()=>deleteTodo(todo.id)}
            class="bg-red-400 hover:bg-red-300 active:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 w-full sm:w-auto">
                
                ❌
            </button>


        </div>
    )
}

export default TodoItem