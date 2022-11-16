import React, { useEffect, useState } from 'react'
import DynamicForm from './features/DynamicForm'
import Button from './utilities/Button'
import Spinner from './utilities/Spinner'

const ContactForm = () => {
    const [loading, setloading] = useState(false)
    const formData={
        title:"Contact Me",
        // formLogo:"FORM_LOGO",
        submitBtnText:"",
        cancelBtnText:"",
        formFields:[
            {id:1, name:"name", label:"Name", placeHolder:"Enter name!", type:"text", required:true },
            {id:2, name:"email", label:"Email", placeHolder:"Enter email!", type:"email", required:true },
            // {id:3, name:"password", label:"Password", placeHolder:"Enter password!", type:"password", required:true },
            // {id:4, name:"gender", label:"Gender", placeHolder:"Enter gender!", type:"select", required:true ,options:[{id:1, value:"male", label:"Male"},{id:2, value:"female", label:"Female"},{id:3, value:"other", label:"Other"}] },
            // {id:5, name:"nationality", label:"Nationality", placeHolder:"Enter nationality!", type:"radio", required:true, options:[{id:1, value:"indian", label:"Indian"},{id:2, value:"other", label:"Other"}] },
            {id:6, name:"contactTermsAccepted", label:"Authorize Us to contact you", placeHolder:"Please check to proceed!", type:"checkbox", required:true }, 
        ],
        additonalLinks:[
            {
                id:1, 
                name:"checkStatus",
                title:"Check your status!",
                link:"/about",
            }
        ]
    }

    const onSubmit=(data) => { 
        setloading(true)
        // console.log(data);
        setTimeout(() => {
            setloading(false)
        }, 500); 
        return {status:true}
     }

    useEffect(() => {
        // setTimeout(() => {
        //     setloading(false)
        // }, 3000); 
    }, [])
    
  return (
    <div>ContactForm
        <DynamicForm formData={formData} onSubmit={onSubmit} loading={loading} />
    </div>
  )
}

export default ContactForm