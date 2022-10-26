const express = require('express');
const morgan = require('morgan');

const todoRouter = require('./routes/todoRouter');
const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(morgan('dev'));
app.use(express.json());




app.use('/api/v1/todos', todoRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;
