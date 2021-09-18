const dotenv = require('dotenv');
require('colors');

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down gracefully...'.red.bold);
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './variables.env' });
const app = require('./app');

app.set('port', process.env.PORT || 3300);

const server = app.listen(app.get('port'), () =>
    console.log(`App listening on port ⁍⁍⁍⁍‣‣‣ ${server.address().port}`.blue.bold)
);

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down gracefully...'.red.bold);
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
