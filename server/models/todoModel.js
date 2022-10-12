import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
    todoName:{
        type: String,
        required:true
    },
    deadline:{
        type: String,
        required:true
    }
    
})

export default mongoose.model('ToDo',todoSchema)