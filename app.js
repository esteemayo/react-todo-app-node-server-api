const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// requiring route
const todoRoute = require('./routes/todos');

const app = express();

// Global middlewares
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

// Developmwent logging
if (app.get('env') === 'development') {
    app.use(morgan('dev'));
}

// Body Parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/todos', todoRoute);

module.exports = app;
