import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todoId:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
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