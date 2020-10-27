import { hash } from 'bcryptjs';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
// import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    console.log('userExists: ', userExists);

    if (userExists) {
      throw new Error('This e-mail is already registered');
      // throw new AppError('This e-mail is already registered');
    }

    return await this.usersRepository.create({
      name,
      email,
      password: await hash(password, 8),
      admin: false,
    });
  }
}

export default CreateUserService;
