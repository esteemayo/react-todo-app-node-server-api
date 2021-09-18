const { nanoid } = require('nanoid');

const todos = [
    {
        id: nanoid(),
        title: 'Wash the car',
        completed: true,
    },
    {
        id: nanoid(),
        title: 'Go to the gym',
        completed: false,
    },
    {
        id: nanoid(),
        title: 'Go to school',
        completed: false,
    },
    {
        id: nanoid(),
        title: 'Read my books',
        completed: false,
    },
    {
        id: nanoid(),
        title: 'Write some code',
        completed: false,
    },
];

module.exports = todos
