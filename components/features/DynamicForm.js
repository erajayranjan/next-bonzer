import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../utilities/Button'

const DynamicForm = ({formData, loading, onSubmit}) => {

    const [formInputs, setFormInputs] = useState({})
    // const [loadingSpinner, setLoadingSpinner] = useState(loading || false)


const handleSubmit=async(evt) => { 
    evt.preventDefault()
    // setLoadingSpinner               (true)
    const data=new FormData(evt.currentTarget)
    // formData.formFields.forEach(e=>setFormInputs({...formInputs, [e.name]:data.get(e.name)}))
    // console.log( formInputs );
    const res= await onSubmit(formInputs);
    res && res.status && console.log(res)
 }

 const handleCancel=() => { 
    console.log("Cancelled");
  }

 const handleChange=(evt) => { 
    //  let value=evt.target
    // const data=new Form
     let {name, value, type, required, checked}=evt.target;
     value=type==="checkbox" ? checked : value;
    //  console.log(name, ">>", value)
    setFormInputs({...formInputs, [name]:value})
  }

  return (
    <div>
        <h3 className='bg-blue-700 text-blue-50 p-2'> { formData.title }</h3>
        <form onSubmit={handleSubmit}>
            {
                formData.formFields.map((field, index)=>{
                    return (
                            (field.type==="text" || field.type==="email" || field.type==="password") ?
                            <div className='p-1 mx-5 flex justify-between w-1/2' key={index}>
                                <label className='w-1/3'>{field.label}</label>
                                <input className={field.className + " w-2/3 p-1 "} 
                                onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} />
                            </div>
                            : field.type==="select" ?
                            <div className='p-1 mx-5 flex justify-between w-1/2' key={index}>
                                <label className='w-1/3'>{field.label}</label>
                                <select  className={field.className + " w-2/3 p-1"}>
                                   {field.options.map((item, index)=> <option key={index} className='m-2' label={item.label} value={item.value} />)}
                                </select>
                            </div>
                            : field.type==="radio" ?
                            <div className='p-1 mx-5 flex justify-between w-1/2' key={index}>
                                <label className='w-1/3'>{field.label}</label>
                                {field.options.map((item, index)=> <div key={index} className={field.className + " w-2/3 p-1"} >
                                    <label>{item.label}</label>
                                    <input className={field.className + "   "} 
                                        onChange={handleChange} value={item.value}
                                        name={field.name}   type={field.type} required={field.required} />
                                </div>)}
                                
                            </div>
                            : field.type==="checkbox" ?
                            <div className='p-1 mx-5 flex justify-between w-1/2' key={index}>
                                <label className='w-1/3'>{field.label}</label>
                                <input className={field.className + " left-0 w-2/3 h-5 "} 
                                onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} />
                            </div>
                            : ""
                    )
                })
            }
            <Button 
                type={"submit"}
                loading={loading || false}
                title={ formData.submitBtnText || "Submit"}
            />
            <Button 
                type={"reset"}
                title={ formData.resetBtnText || "Reset"}
                // onClick={handleCancel}
            />
            {/* <Button 
                type={"reset"}
                title={ formData.cancelBtnText || "Cancel"}
                onClick={handleCancel}
            /> */}
            {/* <button className='bg-blue-500 m-2 px-2 rounded text-blue-50' type='submit'>{ formData.submitBtnText || "Submit"}</button>
            <button className='bg-red-500 m-2 px-2 rounded text-red-50' type='button' onClick={handleCancel} >{ formData.cancelBtnText || "Cancel"}</button> */}

        </form>
        <div>
            { formData.additonalLinks && 
                formData.additonalLinks.map((link, index)=>{
                    return (
                        <Link key={index} href={link.link}>
                            {link.title}
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DynamicForm