import React from 'react'
import Spinner from './Spinner'

const Button = ({title, type, onClick, varient, loading, icon, iconPosition}) => {
  return (
    <button 
        type={type || "button"} 
        onClick={onClick} 
        className={"bg-blue-600 hover:bg-blue-700 active:bg-blue-900 p-2 m-2 rounded min-w-32 text-blue-100"} 
    >
       <span className='flex gap-2'>
            <span className='w-5'>{loading  && <Spinner size={"sm"} />} </span>  
            <span className='pr-7'>{title || "Submit"} </span>
        </span>
    </button>
  )
}

export default Button