import React from 'react'
// import './spinner.css'

const Spinner = ({size}) => {
    const spinnerSize=size==="md" ? 10 : size==="sm" ? 5 :  null
  return (
    <div className={`loader w-${spinnerSize || 5} h-${spinnerSize || 5}`}>
        
    </div>
  )
}

export default Spinner