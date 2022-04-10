import React,{useState} from "react";
import TodoList from '../Componant/TodoList'
import './TodoApp.css'
import axios from "axios";
import {useForm} from 'react-hook-form'

export default function TodoApp() {
    
    const{register,handleSubmit,formState:{errors}}=useForm()
    const [status,setStatus]=useState()
    const handleCheckboxChange=(id) =>
    console.log(id)
    async function submit(submission){ 
    
        try {
        await axios.post("https://62170ea271e7672e53724c83.mockapi.io/todo",submission)
        setStatus(true)
      
    } catch (error){
        console.log("Something is wrong")
    }
  }
  if(status){
    return <TodoApp/>
  }
  
 return (
    <>
      <div className="box">
      <div className="box2">
        <h1> TODO-APP </h1>
        <form  onSubmit={handleSubmit(submit)}>
           <div>
           <label htmlFor="fnav">new  Todo</label>
           <input type={'text'}  {...register("title",{required:true})} placeholder='Enter the title...'  />
           {errors?.description?.type === "required" && <span>This field is required</span>}
           <label htmlFor="fname"> Add Todo description</label></div>
           
           <textarea type="text" rows='4' cols="50" {...register("description",{required:true})} placeholder='Enter the description...'  />
           {errors?.description?.type === "required" && <span>This field is required</span>}
       
           <div>
           <div><label htmlFor="name"> Date</label></div>
           <input type="date" {...register("date",{required:true})} />
           {errors?.date?.type === "required" && <span>date is require</span>}
           </div>
       
           <div>
           <input type="submit" value="Submit"/>
           </div>
           </form>

        </div>  
        </div> 
        <TodoList/>   
    </>
  );
}
