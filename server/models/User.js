import mongoose from 'mongoose';
import uuidv4 from 'uuid';

const User = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: [String],
        default: [],
    }
})

export default  mongoose.model('User', User);