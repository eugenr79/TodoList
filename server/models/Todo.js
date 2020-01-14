const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.set('useFindAndModify', false);

// Define collection and schema for Todo
let Todo = new Schema(
    {
        text: {
            type: String
        }
    },
    {
        collection: 'todos'
    }
);

module.exports = mongoose.model('Todo', Todo);