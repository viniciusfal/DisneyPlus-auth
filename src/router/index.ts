import { Router } from 'express';

import UsersRouter from './User.routes';

const routes = Router();
routes.use('/users', UsersRouter);

export default routes;
