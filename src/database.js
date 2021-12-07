const mongoose = require('mongoose');

const { DATABASE, DATABASE_TEST, NODE_ENV } = process.env;

const connectionsString = NODE_ENV === 'test' ? DATABASE_TEST : DATABASE;

if (!connectionsString) console.error('Remember that you have to have a .env file with the environment variables defined and the DATABASE that will serve as the connection string.');

mongoose.connect(connectionsString)
    .then(db => {
        if (NODE_ENV !== 'test') {
            console.log('DB Connection Successfull!');
        } else {
            console.log('DB TEST is connected');
        }
    }).catch(err => console.error(err));