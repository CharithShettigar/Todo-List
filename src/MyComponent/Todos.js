import React from 'react'
import TodoItem from './TodoItem'

// const onDelete=(sno)=>{
//   console.log(sno," Delete btn clicked")
// }

const Todos = (props) => {
  return (
    <>
    <h2>Todos List</h2>
      <div className='mb-5'>
        {
          props.todo.length ? 
          props.todo.map( (item,pos) =>{
            return(
              <TodoItem key={item.sno} todo={item} onDelete={props.onDelete} />
            )
          })
          :
          <h3 className='text-warning'>No todos to display</h3>
        }
      </div>
    </>
  )
}

export default Todos