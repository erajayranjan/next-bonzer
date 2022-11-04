import React, { useState } from 'react'

const DynamicForm = () => {

    const [formInputs, setFormInputs] = useState({})
const formData={
    title:"Sign up",
    formLogo:"FORM_LOGO",
    submitBtnText:"",
    cancelBtnText:"",
    formFields:[
        {id:1, name:"name", label:"Name", placeHolder:"Enter name!", type:"text", required:true },
        {id:2, name:"email", label:"Email", placeHolder:"Enter email!", type:"email", required:true },
        {id:3, name:"password", label:"Password", placeHolder:"Enter password!", type:"password", required:true },
        {id:4, name:"gender", label:"Gender", placeHolder:"Enter gender!", type:"select", required:true ,options:[{id:1, value:"male", label:"Male"},{id:2, value:"female", label:"Female"},{id:3, value:"other", label:"Other"}] },
        {id:5, name:"nationality", label:"Nationality", placeHolder:"Enter nationality!", type:"radio", required:true, options:[{id:1, value:"indian", label:"Indian"},{id:2, value:"other", label:"Other"}] },
        {id:6, name:"termsAccepted", label:"Terms Accepted", placeHolder:"Please accept terms to proceed!", type:"checkbox", required:true },
        
    ]
}

const handleSubmit=async(evt) => { 
    evt.preventDefault()
    const data=new FormData(evt.currentTarget)
    // formData.formFields.forEach(e=>setFormInputs({...formInputs, [e.name]:data.get(e.name)}))
    console.log( formInputs );
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
                                <input className={field.className + " w-2/3 p-1 "} 
                                onChange={handleChange}
                                    name={field.name} placeholder={field.placeHolder} type={field.type} required={field.required} />
                            </div>
                            : ""
                    )
                })
            }
            <button className='bg-blue-500 m-2 px-2 rounded text-blue-50' type='submit'>{ formData.submitBtnText || "Submit"}</button>
            <button className='bg-red-500 m-2 px-2 rounded text-red-50' type='button' onClick={handleCancel} >{ formData.cancelBtnText || "Cancel"}</button>

        </form>
    </div>
  )
}

export default DynamicForm