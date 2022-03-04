import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import AddToDo from '../components/AddEditToDo'

export default function Dashboard({todo}) {
  
    const [todoList,setTodo] = useState(todo);
    const URL = process.env.URL;
    const router = useRouter();

    useEffect(()=>{
      setTodo(todo);
    })

    function Add() {

      return (
      
        <AddToDo edit={false}  pageName="addTodo" />
        
         )
    }

    const deleteAll = () => {
      const deleteitemsall = async() => { 
        const res =  await fetch(`${URL}/api/todo/`, {
            method: 'DELETE',
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json",
            }
        })
        const ret = await res.json()
         console.log({ret})
        // router.push("/torenew")
       // Router.back()
    
   }
   deleteitemsall();
  }
   //deleteitems();

    const deleteItem = (id) => {
      const deleteitems = async() => { 
        const res =  await fetch(`${URL}/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json",
            }
        })
        const ret = await res.json()
         console.log({ret})
        // router.push("/torenew")
       // Router.back()
       //setTodo(todo);
   }
  
   deleteitems();
  // router.push(`/`);
  }
  //  router.push(`/`,{
  //   shallow: true,
  //   });
  //   }
  //   useEffect(()=>{
  //   const getitems = async() => { 
  //     const res = await fetch(`${URL}/api/todo`)
  //     const res1 = await res.json()
  //     setTodo(res1.data)
  //   }
  //   getitems()
  // },[]);
      return (
               <div className="container">
       
        <div className="mt-3 ">
        <div>
    <span className="m-2 float-left">
        <h2> To-do List </h2>
      </span>
      <span className="m-2 btn btn-primary float-right">
      <Link href="/addTodo" className="">Add Todo</Link>
      </span>
      {/* <span className="m-2 btn btn-primary float-right">
      <Link href="/" className=""><span 
                                   
                                   onClick={() => Add()}
                               >Add To Do</span></Link>
      </span> */}
      <span className="m-2 btn btn-primary float-right">
      <Link href="/" className=""><span 
                                   
                                   onClick={() => deleteAll()}
                               >Clear All</span></Link>
      </span>
      </div>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Task</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                todoList?.map(todo => (
                  <tr key={todo._id}>
                    <td>
                      {todo.Name}
                    </td> 
                    <td>
                     <Link href={`/edit/${todo?._id}`}>Edit</Link>
                    </td> 
                    <td>
                     {/* <Link href={`/delete/${todo?._id}`}>Delete</Link> */}
                     <Link href="/">
                                <span 
                                   
                                    onClick={() => deleteItem(todo?._id)}
                                >Delete</span>
                      </Link>
                    </td>                 
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      )
}

