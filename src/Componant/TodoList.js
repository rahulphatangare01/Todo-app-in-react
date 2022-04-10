
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoApp from './TodoApp';

export default function TodoList () {

const [ check,setCheck]=useState (false)

  const [todoArr, setTodoArr]=useState([])
    useEffect(() => {
      getTodo();
    },[])
    async function getTodo(){
        try {
        const Data = await axios.get("https://62170ea271e7672e53724c83.mockapi.io/todo")
        //console.log(Data.data)
        setTodoArr(Data.data);
        } catch (error){
        console.log("Something is wrong")
    }
  }
    async function deleteData(id) {
        await axios.delete(`https://62170ea271e7672e53724c83.mockapi.io/todo/${id}`);
        var newTodo = todoArr.filter((item)=>{
        return item.id !== id;
    })
    setTodoArr(newTodo);
    }   

   
     var lastestdate = new Date()
 return (

<div className="todo-list">
    <ul>
      {
       todoArr.map((el)=>{
          return(
          <>
            <li key={el.id}>
              <div className='map'>{el.title}</div>
              <div className='map'>{el.description}</div>
              <div className='map'>{el.date}</div>
              
              
              {check===false? lastestdate>=new Date(el.date) ?<span className='red'>due Date Passed</span>:<span className='green'>due Date</span>:""}

              
              <div className="icon">
              <input  title='complete' type={"checkbox"}  onChange={(e)=>setCheck(e.target.checked)} />
                <i title="Delete"    onClick={()=>{deleteData(el.id)}} className="fa fa-trash"/>
              </div>
            </li>
          </>
          )
        })
        }
        
        
    </ul>
  </div>




);
}






























