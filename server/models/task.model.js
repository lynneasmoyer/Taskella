const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "A task must have a title."],
        minlength: [3, "Title must be at least 3 characters."],
        unique: [true, "That task already exists."]
    },
    duedate: { 
        type: Date,
        required: [true, "Your task must have a due date."],
        
    },
    description: {
        type: String,
        required: [true, "You must include a description."],
        minlength: [5, "Tell me more."],
        maxlength: [50, "Too long."]
    }
}, { timestamps: true });


const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
