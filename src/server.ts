import 'reflect-metadata';

import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './router/index';
import './database';
import AppError from './errors/AppError';

const express = require('express');

const app = express();

app.use(express.json());
app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }
        console.error(err);
        return response.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    },
);
app.listen('3333', () => {
    console.log('🚀 Server started on port 3333!');
});
