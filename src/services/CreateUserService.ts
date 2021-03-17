import { getRepository } from 'typeorm';

import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
    email: string;
    password: string;
}
class CreateUserService {
    public async execute({ email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const CheckUserExists = await usersRepository.findOne({
            where: { email },
        });

        if (CheckUserExists) {
            throw new AppError('This email doesn`t valid', 400);
        }

        const user = usersRepository.create({
            email,
            password,
        });
        await usersRepository.save(user);
        return user;
    }
}

export default CreateUserService;
