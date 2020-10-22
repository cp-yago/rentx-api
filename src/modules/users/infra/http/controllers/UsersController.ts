import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

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

    console.log('UsersController');

    return response.status(201).json(user);
  }
}
