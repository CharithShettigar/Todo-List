import './App.css';
import Header from './MyComponent/Header';
import { AddTodo } from './MyComponent/AddTodo';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './MyComponent/About';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {

    setTodos(todoList.filter((e) => {
      return e !== todo;
    }
    ))
  }

  const addTodo = (title, desc) => {
    let sno = 1
    if (todoList.length) {
      sno = todoList[todoList.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      task: title,
      desc: desc
    }
    setTodos([...todoList, myTodo])
  }


  const [todoList, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  return (

    <div className="App">
      <Router>
        <Header title="My ToDo List" checkSearch={true} />
        <Routes>
          <Route exact path='/' element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todo={todoList} onDelete={onDelete} />
              </>
            }>
          </Route>
          <Route exact path='/about' element={
            <About />
          }>
          </Route>
          <Route exact path='/add' element={
              <AddTodo addTodo={addTodo} />
              }>
          </Route>
          <Route exact path='/todos' element={
                <Todos todo={todoList} onDelete={onDelete} />
              }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
