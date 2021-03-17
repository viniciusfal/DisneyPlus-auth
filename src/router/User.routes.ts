import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    const authRepository = getRepository(User);

    const users = await authRepository.find();

    return response.json(users);
});

usersRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
        email,
        password,
    });

    const userWithoutPassword = {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
    };
    return response.json({ user: userWithoutPassword });
});

export default usersRouter;
