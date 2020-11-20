import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    console.log('createUser: ', createUser);

    const user = await createUser.execute({
      name,
      email,
      password,
      admin,
    });

    delete user.password;

    return response.status(201).json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const updateUser = new UpdateUserService(usersRepository);

    const { name, email, password, admin, avatar } = request.body;
    // eslint-disable-next-line prefer-destructuring
    const id = request.user.id;
    const user = await updateUser.execute({
      id,
      name,
      email,
      password,
      admin,
      avatar,
    });

    delete user.password;

    return response.status(200).json(classToClass(user));
  }
}
