import React from 'react'
import Spinner from './Spinner'

const Button = ({title, type, onClick, varient, loading, icon, iconPosition, className, fullWidth}) => {
  return (
    <button 
        type={type || "button"} 
        onClick={onClick} 
        className={className + " text-center bg-blue-600 hover:bg-blue-700 active:bg-blue-900 p-2 m-2 rounded min-w-32 text-blue-100" + fullWidth ? " w-full" :""   } 
    >
       <span className='flex gap-2 justify-center'>
            <span className='w-5'>{loading  && <Spinner size={"sm"} />} </span>  
            <span className='pr-7'>{title || "Submit"} </span>
        </span>
    </button>
  )
}

export default Button