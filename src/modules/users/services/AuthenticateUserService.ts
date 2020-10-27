import User from '@modules/users/infra/typeorm/entities/User';

import IJWTProvider from '@modules/users/providers/IJWTProvider';
import IHashProvider from '@modules/users/providers/IHashProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private jwtProvider: IJWTProvider,
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect password/email combination');
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new Error('Incorrect password/email combination');
    }

    const { token } = this.jwtProvider.generate({ user_id: user.id });

    delete user.password;

    return { user, token };
  }
}

export default AuthenticateUserService;
