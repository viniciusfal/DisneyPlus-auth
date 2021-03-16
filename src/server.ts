import 'reflect-metadata';
import routes from './router/index';
import './database';

// eslint-disable-next-line import/order
import express = require('express');

const app = express();

app.use(express.json());
app.use(routes);

app.listen('3333', () => {
    console.log('🚀 Server started on port 3333!');
});
