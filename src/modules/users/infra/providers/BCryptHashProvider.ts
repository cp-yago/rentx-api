import { hash, compare } from 'bcryptjs';

import IHashProvider, {
  PasswordToHash,
} from '@modules/users/providers/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash({ password }: PasswordToHash): Promise<string> {
    return await hash(password, 8);
  }

  public async compareHash(
    noHashedPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(noHashedPassword, hashedPassword);
  }
}

export default BCryptHashProvider;
