import React, { useState } from 'react'
import { useTodo } from '../contexts/todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem({todo}) {
    
    const [isEditible,setIsEditible] = useState(false)
    const [todoMsg,settodoMsg] = useState(todo.todo)
    const {updateTodo,deleteTodo,toogleComplete} =useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo,todo:todoMsg})
        setIsEditible(false)
    }

    const checkMarked =()=>{
        toogleComplete(todo.id)
    }
  return (
    <div className="flex flex-col justify-center gap-3 ">
          <div>
            <ul>
              <div className={`text-gray-300 w-full h-[50px]
                 bg- text-bold flex justify-center gap-9 items-center 
                 relative right-3
                 `}>
                <input type="checkbox" name="" 
                className='cursor-pointer  relative left-6 w-12 h-4'
                checked={todo.completed}
                onChange={checkMarked}
                id="" />
                <input type="text"
                value={todoMsg}
                 readOnly={!isEditible}
                 onChange={(e)=>{settodoMsg(e.target.value)}}
                 className={`border-none cursor-pointer focus:outline-none  
                     ${todo.completed?"dark:bg-green-300 bg-green-500":"bg-slate-500 text-white dark:bg-customColor dark:text-customBackground"}
                      rounded-md w-[300px] h-[40px]
                    pl-5 ${todo.completed? "line-through text-gray-800":"line-clamp-none"} `}
                 name="" id="" />
               
                <div>
                  <button onClick={()=>{
                    if(todo.completed)return;
                    if(isEditible){
                        editTodo();
                    }else {
                        setIsEditible((prev)=> !prev)
                    }
                }}
                disabled= {todo.completed}
                >
                    <i className={`${isEditible?'fa-regular  fa-floppy-disk dark:text-green-400 text-green-700':"fa-regular fa-pen-to-square dark:text-white text-customBackground "} mr-5 `}></i>
                    {/* {isEditible? "save":"edit"} */}
                    </button>
                  <button onClick={()=>deleteTodo(todo.id)}> <i className="fa-solid fa-trash dark:text-red-400 text-red-500" ></i>
                  </button>
                </div>
              </div>
              
              
            </ul>
          </div>
        </div>
  )
}

export default TodoItem