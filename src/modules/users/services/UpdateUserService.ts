import { hash } from 'bcryptjs';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  admin?: boolean;
  avatar?: string;
}

class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    id,
    name,
    email,
    password,
    admin,
    avatar,
  }: IRequest): Promise<User> {
    const updateUser = await this.usersRepository.update({
      id,
      name,
      email,
      password: password && (await hash(password, 8)),
      admin,
      avatar,
    });

    return updateUser;
  }
}

export default UpdateUserService;
