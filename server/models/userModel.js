import mongoose from 'mongoose'
import { nanoid } from 'nanoid';

const userSchema =mongoose.Schema({

    uniqueId: {
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
      },
    
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['USER','ADMIN'],
        default: 'USER'
    }
})

export default mongoose.model('User',userSchema)