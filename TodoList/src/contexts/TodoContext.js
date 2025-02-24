import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todo:[
        {
        id : 1,
        todo:"msg",
        completed:false,
        },

    ],
    addtodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    updateTodo:(id,newTodo)=>{},
})


export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider