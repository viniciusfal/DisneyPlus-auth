import { Router } from 'express';

import AuthSession from '../services/AuthSessions';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authsession = new AuthSession();

    const { user, token } = await authsession.execute({
        email,
        password,
    });

    const sessionWithoutPassword = {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
    };

    return response.json({ user: sessionWithoutPassword, token });
});

export default sessionsRouter;
