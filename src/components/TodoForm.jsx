import React, { useState } from 'react'
import { useTodo } from '../contexts/todo'

function TodoForm() {
    const [todo,setTodo] = useState([])
    const {addTodo} = useTodo();
    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        addTodo({todo,complete:false})
        setTodo("")
    }
  return (
    <form onSubmit={add}>
        <div className="p-2 flex justify-center items-center gap-3 ">
          <input
            type="text "
            placeholder="Add todo "
            className="w-[300px] h-[40px] rounded-md p-4 text-md "
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
          />
          <button type='submit' className="w[80px] rounded-md dark:bg-customColor bg-slate-700
          text-white dark:text-gray-900  font-serif 
          w-[100px]  h-[40px] ">
            Add
          </button>
        </div>
    </form>
  )
}

export default TodoForm