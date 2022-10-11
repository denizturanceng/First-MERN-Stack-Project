import React from 'react'
import { Button, DataGrid, Form } from 'react-bootstrap'
const ToDoScreen = () => {
  return <div className='text-center'>
        <h1 className='text-dark'>
            ToDo Screen
        </h1>
        <form>
          <Form.Control type='text' placeholder='todo description'></Form.Control><br></br><br></br>
          <Form.Control type='text' placeholder='deadline'></Form.Control><br></br><br></br>
          <Button variant='dark'>Add</Button>
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