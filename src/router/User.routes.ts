import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const createUser = new CreateUserService();
        const user = await createUser.execute({
            email,
            password,
        });
        return response.json(user);
    } catch (err) {
        return response.json(err.message);
    }
});

export default usersRouter;
