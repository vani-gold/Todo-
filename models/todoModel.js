const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
title: {
    type: String,
    required: [true, 'Todo must have a title'],
    uniqiue: [true, 'This already exist']
},
description: {
    type: String,
    required: [true, 'you can leave a Todo empty'],
},
createdAt: {
    type: Date,
    default: Date.now(),
    select: false
}
});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
