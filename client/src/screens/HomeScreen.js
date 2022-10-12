import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import logo from './logo.png';
import { login } from '../axios'
import { useNavigate } from 'react-router-dom'


const HomeScreen = ({setUser}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  
  return (
    <div className='text-center'>
        <h1 className='text-dark'>TODO APP</h1>
        <img src={logo}/>
        <form onSubmit={(e) => {
          e.preventDefault()
          login(formData).then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.user));
                    setUser(res.data.user);
                    navigate("/");
            }).catch((err) => {
              console.log(err.response.data.message);  
            });
        }}>
          <Form.Control type='email' onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder='your email'></Form.Control><br></br><br></br>
          <Form.Control type='password' onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder='your password'></Form.Control><br></br><br></br>
          <Button type="submit" variant='dark' href='/todo'>Sign In</Button>
        </form>
    </div>
  )
}

export default HomeScreen 