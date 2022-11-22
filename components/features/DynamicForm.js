import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../utilities/Button'

const DynamicForm = ({formData, loading, onSubmit, defaultFieldValues}) => {

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
     console.log(name, ">>", value)
    setFormInputs({...formInputs, [name]:value})
  }

  return (
    // <div className='w-full md:w-1/2'>
    <div className=''>

        <h3 className=' text-center text-blue-700 text-lg font-bold p-2'> { formData.title }</h3>
        <form onSubmit={handleSubmit} className={""}>
            {
                formData.formFields.map((field, index)=>{
                    return (
                            (field.type==="text" || field.type==="email" || field.type==="password" || field.type==="number" || field.type==="tel") ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                {/* <label className=''>{field.label} {field.required && "*"}</label> */}
                                <input className={field.className + 
                                "form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"} 
                                    defaultValue={defaultFieldValues[field.name] || ""}
                                    onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} />
                            </div>
                            : field.type==="select" ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                {/* <label className=''>{field.label} {field.required && "*"}</label> */}
                                <select  className={field.className + " form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "}  
                                    name={field.name}
                                    defaultValue={defaultFieldValues[field.name] || ""}
                                    required={field.required}
                                    onChange={handleChange} 
                                >
                                    <option className='m-2' label={field.placeHolder} />
                                   {field.options.map((item, index)=> <option key={index} className='m-2' label={item.label} value={item.value} />)}
                                </select>
                            </div>
                            : field.type==="radio" ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                <label className='w-full font-bold'>{field.label} {field.required && "*"}</label>
                                {field.options.map((item, index)=> <div key={index} className={field.className + " p-1  w-full w-1/4"} >
                                    <label>{item.label}</label>
                                    <input className={field.className + "   "} 
                                        defaultValue={defaultFieldValues[field.name] || ""}
                                        onChange={handleChange} 
                                        value={item.value}
                                        name={field.name}   type={field.type} required={field.required} 
                                    />
                                </div>)}
                                
                            </div>
                            : field.type==="checkbox" ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                <input className={field.className + "form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer     "} 
                                    defaultChecked={defaultFieldValues[field.name] || false}
                                    onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} />
                                    <label className='form-check-label inline-block text-gray-800'>{field.label} {field.required && "*"}</label>
                            </div>
                            :                                                                   
                             field.type==="textarea" ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                {/* <label className=''>{field.label} {field.required && "*"}</label> */}
                                <textarea className={field.className + "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "} 
                                onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} pattern={field.pattern} />
                            </div>
                             :                                                                   
                             field.type==="file" ?
                            <div className='m-1 p-2 mx-5 flex justify-between' key={index}>
                                {/* <label className=''>{field.label} {field.required && "*"}</label> */}
                                <input className={field.className + "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "} 
                                onChange={handleChange}
                                    name={field.name} type={field.type} required={field.required}  />
                            </div>
                            : ""
                    )
                })
            }
           <div className=''>
                <Button 
                    type={"submit"}
                    loading={loading || false}
                    title={ formData.submitBtnText || "Submit"}
                    className="w-full"
                />
                <Button 
                    type={"reset"}
                    title={ formData.resetBtnText || "Reset"}
                    // onClick={handleCancel}
                    className="w-full bg-red-500 "
                />
           </div>
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
                        <Link key={index} href={link.link} className={"p-2"}>
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