import React, { useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { register } from "../axios";
const RegisterationScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    
  });
  return <div className='text-center'>
    <h1 className='text-dark'>Registeration Screen</h1>
    <form onSubmit={(e) => {
              e.preventDefault();

              register(formData)
                .then((res) => {
                  navigate("/signup");
                })
                .catch((err) => console.log(err));
            }}
          >
        <Form.Control onChange={(e) => setFormData({...formData, fullname: e.target.value})} type='fullname' placeholder='your name and surname'></Form.Control><br></br><br></br>
        <Form.Control onChange={(e) => setFormData({...formData, email: e.target.value})} type='email' placeholder='your email'></Form.Control><br></br><br></br>
        <Form.Control onChange={(e) => setFormData({...formData, password: e.target.value})} type='password' placeholder='your password'></Form.Control><br></br><br></br>
        <Button type='submit' variant='dark'>Sign Up</Button>
    </form>
  </div>
}

export default RegisterationScreen