import { Router } from 'express';

import usersRouter from './User.routes';
import sessionsRouter from './Sessions.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
