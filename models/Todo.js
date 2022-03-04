const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    Name: {
        type: String,
       
    }
})

module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)