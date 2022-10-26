const fs = require('fs');
const Todo = require('../models/todoModel');


// GET ALL TODOS
exports.getAllTodos = async (req, res) => {
    try{
    const todos = await Todo.find();
        res.status(200).json({
            status: 'success',
            results: todos.length,
            data: {
                todos
            }
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
} 

// GET ONE TODOS
exports.getTodo =  async (req, res) => {
    try{
    const todo = await Todo.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
 
} 

// POST/CREATE A TODO
exports.createTodo = async (req, res) => {
try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            todo: newTodo
        }
    })

} catch (err){
    res.status(400).json({
        status: 'fail',
        message: err
   });
}
}

// PATCH/UPDATE TODO
exports.updateTodo =  async (req, res) => {
    try{
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
    
 
}; 
// DELETE TODO
exports.deleteTodo =  async (req, res) => {
    try{
    const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: {
                todo
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
 
}; 
