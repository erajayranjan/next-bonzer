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
            {id:3, name:"contact", label:"Contact No.", placeHolder:"Enter contact no!", type:"tel", required:true, pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}" },
            {id:4, name:"query", label:"Query", placeHolder:"Enter query!", type:"textarea", required:false },
            // {id:5, name:"city", label:"City", placeHolder:"Enter city!", type:"text", required:false },
            // {id:6, name:"zip", label:"Area Pincode", placeHolder:"Enter Pincode!", type:"text", required:false },
            // {id:3, name:"password", label:"Password", placeHolder:"Enter password!", type:"password", required:false },
            // {id:4, name:"gender", label:"Gender", placeHolder:"Select gender!", type:"select", required:true ,options:[{id:1, value:"male", label:"Male"},{id:2, value:"female", label:"Female"},{id:3, value:"other", label:"Other"}] },
            // {id:5, name:"nationality", label:"Nationality", placeHolder:"Enter nationality!", type:"radio", required:false, options:[{id:1, value:"indian", label:"Indian"},{id:2, value:"USA", label:"USA"},{id:3, value:"other", label:"Other"}] },
            {id:7, name:"contactTermsAccepted", label:"Authorize Us to contact you", placeHolder:"Please check to proceed!", type:"checkbox", required:true }, 
        ],
        additonalLinks:[
            // {
            //     id:1, 
            //     name:"checkStatus",
            //     title:"Check your status!",
            //     link:"/about",
            // },
            {
                id:2, 
                name:"checkoutCourses",
                title:"Checkout out our                      courses!",
                link:"/courses",
            },
        ]
    }
    const defaultFieldValues={
        zip:665501,
        contactTermsAccepted:true
    }

    const onSubmit=(data) => { 
        setloading(true)
        console.log(data);
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
    <div>
        <DynamicForm formData={formData} onSubmit={onSubmit} loading={loading} defaultFieldValues={defaultFieldValues} />
    </div>
  )
}

export default ContactForm