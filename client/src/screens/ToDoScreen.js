import React, { useState, useEffect}  from 'react'
import { Button,Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { createTodo , deleteTodo  } from "../axios";
const ToDoScreen = () => {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState({
    todoName: "",
    deadline: "",
  });
  return <div className='text-center'>
        <h1 className='text-dark'>ToDo Screen</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          createTodo(todoData)
          .then((res) => {
            navigate("/create_todo")
          })
          .catch((err) => console.log(err))
        }}>
          <Form.Control onChange={(e) => setTodoData({...todoData, todoName: e.target.value})} type='text' placeholder='todo description'></Form.Control><br></br><br></br>
          <Form.Control onChange={(e) => setTodoData({...todoData, deadline: e.target.value})} type='text' placeholder='deadline'></Form.Control><br></br><br></br>
          <Button type='submit' variant='dark'>Add</Button>
        </form><br></br><br></br><br></br>
    <p>for loop yapmalisin !</p>         
    <table className='table table-striped'>
    <thead>
      <tr>
        <th>To Do Description</th>
        <th>Deadline</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td><Button>Delete</Button></td>
      </tr>
    </tbody>
  </table>
    </div>
  
}

export default ToDoScreen