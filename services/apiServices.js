
     import axios from 'axios'
    //  import { useEffect } from "react";

    //  useEffect(() => {
    //     var authToken=localStorage.getItem('token')
    //     console.log(authToken)
    //  }, [])
    // let localStorage=localStorage.getItem("token")
    // this is a config for Axios so that we need not to pass full URL instead will pass relative url
    // useEffect(() => {
    //     var authToken=localStorage.getItem('token')
    // })
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var bonzerCode=JSON.parse(localStorage.getItem('bonzerCode'))
        // console.log(bonzerCode.token)
      }
    
    const apiCall = axios.create({  
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 10000,
        headers: {
            "Content-Type" : "application/json",
            'authorization':bonzerCode && bonzerCode.token &&  bonzerCode.token,
        }
      });
    
    // To get Data of in full or a single record
    export const getData=async (url, method="GET", data=null, params=null)=>{
        // Re-factored code for API call using fetch    
        let res=await apiCall.get(url, {params}).then(res=>res).catch(err=>err);  
        return res;
    }
    
    // SAVE / UPDATE RECORD
    export const saveData=async (url, data, params=null)=>{
        
        let res;
        if(data.id && data.id!==null){
            res=await apiCall.put(url+'/'+data.id, data).then(res=>res).catch(err=>err);  // Re-factored code for API call using fetch    
        }
        else{
            res=await apiCall.post(url, data).then(res=>res).catch(err=>err);  // Re-factored code for API call using fetch    
        }
        // console.log(res)
        return res;
    }
    
    // DELETE RECORD
    export const deleteData=async (url, id=null, params=null)=>{
        // Re-factored code for API call using fetch    
        console.log("params>>>>",params);
        let res= await apiCall.delete(url, {params}).then(res=>res).catch(err=>err);  
        return res;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //************ For Reference  */
    // export const getData=async (url, method="GET", data=null, params=null)=>{
    //     // let res=(await axios.get(url));  // Re-factored Using Axios now   
    //     let res=(await fetch(url, {method:[method], params:[params]})).json();  // Re-factored code for API call using fetch
    //     return res;
    //     // let res;
    //     // Usual Fetch API Call but here we can use some condition in data filtering.
    //     // await fetch(url, {method:[method], params:[params]}) 
    //     // .then(res=>res.json())
    //     // .then(data=> res=data);
    //     // return res;
    // }