import { useEffect, useState } from 'react'
// import './App.css'
import TodoUI from './components/todoUI';
import TodoForm from './components/TodoForm';
import { TodoItem } from './components';
import { TodoProvider } from './contexts/todo';
import ThemeBtn from './components/themeBtn';
import { ThemeProvider } from './contexts/theme';
function App() {
  //theme func
  
const [themeMode,setThemeMode] = useState("light")

const lightTheme = () =>{
  setThemeMode("light")
}
const darkTheme = () =>{
  setThemeMode("dark")
}

useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector("html").classList.add(themeMode)
},[themeMode])

  // todo func
  const [todos,settodos] = useState([]);
  const addTodo =(todo)=>{
    settodos((oldTodo)=> [{id:Date.now(),...todo},...oldTodo])
  }
  const updateTodo=(id,todo)=>{
    settodos((oldTodo)=> oldTodo.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    settodos((oldTodo)=> oldTodo.filter((todo)=> todo.id !== id))
  }
  const toogleComplete = (id) => {
    settodos((oldTodo)=>{
      return (
        oldTodo.map((prevTodo)=>{
          return(
            prevTodo.id === id ? { ...prevTodo,completed: !prevTodo.completed} : prevTodo
          )
        })
      )
    })
  }
  // get todos on localstorage
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0){
      settodos(todos)
    }
  },[])
  // save on localstorage 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
        <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>

      <div className=' dark:bg-customBackground bg-slate-300 flex flex-col gap-[20px] pt-[100px] items-center h-[100vh]'>
      <ThemeBtn />
        <span className='text-3xl text-bold dark:text-customColor text-customBackground font-bold  font-mono'>TODO APP</span>
    <TodoForm/>
    {todos.map((todo)=>(
      <div key={todo.id}>
        <TodoItem todo={todo}/>
      </div>
    ))}
    </div>

    </TodoProvider>
    </ThemeProvider>
  )
}

export default App
