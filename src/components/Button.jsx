import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "View Link"}) => {
  return (
    <div className='xl:min-w-40 min-w-20 dark:text-black flex items-center justify-between cursor-pointer rounded-full px-4 xl:py-2 py-1 dark:bg-zinc-100 text-zinc-100 bg-zinc-600 hover:bg-zinc-500' >
      <span className='text-sm font-medium mr-1'>{title}</span>
      <span className='font-extrabold'><IoIosReturnRight /> </span>
    </div>
  )
}

export default Button
