import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Link from 'next/link'

//const APP_NAME = process.env.APP_NAME
const URL = process.env.URL

function AddToDo({data,edit}) {

  console.log('In Add component',data);
    const [todo, setTodo] = useState('');
    const { register, handleSubmit } = useForm();
    const router = useRouter();
       const row = data;
    useEffect(()=>{
      if(edit)
      {
        console.log('in edit use effect..',data)
        setTodo(data.Name);
      }
    })

    const onSubmit  = (data) => {
           
        console.log('submit data',data);
       // const data = { todo };
      // data = {Name:'Task 88'};
     //  var t = JSON.stringify(data);
      // console.log('json data',data);
       //alert('in submit');
       //console.log({data});

       if(edit)
       {
         const id = row._id;
        console.log("Edit submit");
       
          const updateitems = async() => { 
            const res =  await fetch(`${URL}/api/todo/${id}`, {
                method: 'PUT',
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const ret = await res.json()
             console.log({ret})
            // router.push("/torenew")
           // Router.back()
        
       }
       updateitems();
      
        
       }
      else
      {
        const setitems = async() => { 
          const res =  await fetch(`${URL}/api/todo`, {
            method: 'POST',
            headers: {
                "Accept" : "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const data1 = await res.json()
        console.log({data1})


          //   const res = await fetch("http://localhost:3000/api/todo",
          //   {method: 'POST',body: JSON.stringify(data),  headers: 
          //   {
          //     "Content-Type": 
          //     "application/json",
          //   },})
          //   console.log(res);
          //   const res1 = await res.json()
          //   //const t = res1.data
          //   //console.log({t});
          
          //  // console.log(todoList)
          //  if(res1.success)
          //  {
          //      alert('submit success!!');
          //  }
          //  else
          //  {
          //      console.log('error',res1.error)
          //  }
          }
          setitems()
        }
          router.push(`/`);

    }

    return (
    <form  onSubmit={handleSubmit(onSubmit)} className="form" > 
    <div className="h2 m-2">Add/Edit</div>
    <div className="row col-md-4 m-4">
   
    {/* <label name="name" className="col ml-6 mr-4">
        Todo
    </label> */}
    <input type="text"  {...register("Name")} defaultValue={todo}
    placeholder="Enter todo item.." className="form-control col mr-2"  
    onChange={e => setTodo(e.target.value)} />
    </div>
   
   <div>
    <span className="form-group  m-2 float-left">
        <button type="submit" className="btn btn-primary">
          Save 
        </button>
      </span>
      <span className="form-group  m-2 btn btn-primary float-right">
      <Link href='/' className="">Back</Link>
      </span>
      </div>
    </form>
    )
}

export default AddToDo