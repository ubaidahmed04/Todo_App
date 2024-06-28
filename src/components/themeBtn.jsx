import React from 'react'
import  useTheme from '../contexts/theme';

function themeBtn() {
  const {themeMode,lightTheme,darkTheme}=useTheme();
  const onchangeBtn = (e) =>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
    }
    else{
      lightTheme()
    }
  }

  return (
    <div className='flex  bottom-[70px] left-[350px]'>
        <input type="checkbox" name="" id="" 
        value=''
        onChange={onchangeBtn}
        checked={themeMode==="dark"}
        className="appearance-none cursor-pointer h-6 w-12 left-5 top-2 dark:bg-gray-300 bg-gray-700 rounded-full relative
        transition-colors duration-200 focus:outline-none  
        before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:h-5 before:w-5 
        before:bg-white  before:rounded-full before:shadow-sm before:transition-transform before:duration-200
        checked:before:translate-x-6"
        />
    </div>
  )
}

export default themeBtn