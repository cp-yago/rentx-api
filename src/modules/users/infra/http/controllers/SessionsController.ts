import { Request, Response } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import JWTProvider from '@modules/users/infra/providers/JWTProvider';
import BCryptHashProvider from '@modules/users/infra/providers/BCryptHashProvider';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const jwtProvider = new JWTProvider();
    const bCryptHashProvider = new BCryptHashProvider();

    const authenticateUser = new AuthenticateUserService(
      usersRepository,
      jwtProvider,
      bCryptHashProvider,
    );

    const user = await authenticateUser.execute({ email, password });

    return response.status(201).send(user);
  }
}
