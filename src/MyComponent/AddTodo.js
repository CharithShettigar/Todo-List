import React from 'react'
import { useState } from 'react'

export const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const submit=(e)=>{
    e.preventDefault();
    if (!title || !desc) {
      alert("Enter the proper details")
    }
    else{

      addTodo(title,desc)
      setTitle('')
      setDesc('')
      // console.log(todo)
    }

  }

  return (
    <>
    <h2>AddTodo</h2>

    <div className="container">
        <div className="mb-3  text-start">
          <form onSubmit={submit}>

            <label htmlFor='title' className="form-label my-1">Title:</label>
            <input type="text" value={title} className="form-control" name="" id="title" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter the Title..." />
            <label htmlFor='desc' className="form-label my-1  ">Todo Descpription:</label>
            <input type="text" value={desc} className="form-control" name="" id="desc" onChange={(e)=>setDesc(e.target.value)}  placeholder="Enter the Description..." />
            
            <button type="submit" className="btn btn-success my-2">Submit</button>
          </form>
        </div>
    </div>

    </>
  )
}
