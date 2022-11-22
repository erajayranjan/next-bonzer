import React, { useEffect, useState } from 'react'
import DynamicForm from '../../../components/features/DynamicForm'
import { saveData } from '../../../services/apiServices'



const addCourse = () => {
    const [loading, setloading] = useState(false)
    const formData={
        title:"Contact Me",
        // formLogo:"FORM_LOGO",
        submitBtnText:"",
        cancelBtnText:"",
        formFields:[
            {id:1, name:"course_name", label:"course_name", placeHolder:"Enter course_name!", type:"text", required:true },
            {id:2, name:"course_title", label:"course_title", placeHolder:"Enter course_title!", type:"text", required:true },
            {id:3, name:"description", label:"description.", placeHolder:"Enter description!", type:"textarea", required:true, pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}" },
            {id:4, name:"overview", label:"overview", placeHolder:"Enter overview!", type:"textarea", required:false },
            {id:5, name:"selling_price", label:"selling_price", placeHolder:"Enter selling_price!", type:"textarea", required:false },
            {id:6, name:"discount", label:"discount", placeHolder:"Enter discount!", type:"textarea", required:false },
            {id:7, name:"selling_price", label:"selling_price", placeHolder:"Enter selling_price!", type:"textarea", required:false },
            // {id:8, name:"images", label:"Images", placeHolder:"Enter Images!", type:"file", required:false },
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

    const onSubmit=async (data) => { 
        setloading(true)
        console.log(data);
        let res=await saveData  ("course/add-course",{
            ...data
        })
        res && console.log(res);
        if(res){
            if(res.status===201){
                alert(`${JSON.stringify(res)}`)
            }
            else{
                alert(`${JSON.stringify(res.response.data.error)}`)
            }
        }
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

export default addCourse