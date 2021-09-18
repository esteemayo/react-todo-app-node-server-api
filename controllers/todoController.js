const { nanoid } = require('nanoid');

const todos = require('../utils/todos');

exports.getAllTodos = (req, res, next) => {
    res.status(200).send(todos);
};

exports.createTodo = (req, res, next) => {
    const todo = {
        id: nanoid(),
        completed: false,
        title: req.body.title,
    };

    todos.push(todo);

    res.status(201).send(todo);
};

exports.updateTodo = (req, res, next) => {
    const id = req.params.id;

    const index = todos.findIndex((todo) => todo.id === id);
    const completed = Boolean(req.body.completed);

    if (index > -1) {
        todos[index].completed = completed;
    }

    return res.send(todos[index]);
};

exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);

    todos.splice(index, 1);

    res.send(todos);
};
