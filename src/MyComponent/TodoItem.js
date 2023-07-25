import React from 'react'

const TodoItem = (props) => {
  return (
    <>

      <div className="card shadow my-3 mx-5">
        <div className="card-body">
          <h4 className="card-title">{props.todo.sno}.{props.todo.task}</h4>
          <p className="card-text">{props.todo.desc}</p>
          <button type="button" className="btn btn-danger" onClick={()=>props.onDelete(props.todo)}>Delete</button>
        </div>
      </div>

    </>
  )
}

export default TodoItem