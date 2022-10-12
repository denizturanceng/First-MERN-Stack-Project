import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';
import ToDo from '../models/todoModel.js';


const router = express.Router();

// localhost:5000/users 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        //console.log(req.body)
        const {userID ,fullname, password, email } = req.body;
        
        const userExists = await User.findOne({ email })
        if(userExists)
            return res.status(400).json({ message: 'User already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            userID,
            fullname,
            email,
            password: hashedPassword,
        })

        return res.status(201).json(createdUser);
    } catch (error) {
        console.log(error)
        return res.json({message: "create user failed"})
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user)
            return res.status(400).json({message: "user does not exist"})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})
// localhost:5000/users/create_todo POST request
router.post("/create_todo", async(req,res)=>{
    try {
        const {todoName, deadline } = req.body;
        const todoExists = await ToDo.findOne({ todoName })
        if(todoExists)
            return res.status(400).json({ message: 'Todo already exists.'})
        const createdTodo = await ToDo.create({
            todoName,
            deadline,
        })
        return res.status(201).json(createdTodo);    

    } catch (error) {
        console.log(error)
        return res.json({message: "create todo failed"})
    }

})
// localhost:5000/users/delete_todo DELETE request
router.delete("/delete_todo", async(req,res) => {
    try {
        const {todoName} = req.body;
        const todo = await User.findOne({todoName})
        if(!todo)
            return res.status(400).json({message: "todo does not exist"})
        const deletedTodo = await ToDo.deleteOne({
            todoName,
        })
        return res.status(200).json(deletedTodo)

    } catch (error) {
        console.log(error)
        return res.json({message:"to delete todo is failed"})
    }
})

export default router;