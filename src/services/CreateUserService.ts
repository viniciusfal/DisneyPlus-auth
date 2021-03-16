import { getRepository } from 'typeorm';

import User from '../models/User';

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
            throw new Error('This email doesn`t valid');
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
