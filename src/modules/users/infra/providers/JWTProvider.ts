import { sign, verify } from 'jsonwebtoken';

import authConfig from '@shared/config/auth';

import IJWTProvider, {
  Payload,
  Token,
} from '@modules/users/providers/IJWTProvider';

class JWTProvider implements IJWTProvider {
  public secret = authConfig.jwt.secret;

  public expiresIn = authConfig.jwt.expiresIn;

  public generate({ user_id }: Payload): Token {
    try {
      const token = sign({ user_id }, this.secret, {
        expiresIn: this.expiresIn,
      });
      return { token };
    } catch (err) {
      console.log(err);
      throw new Error('Invalid payload');
    }
  }

  public getPayload({ token }: Token): Payload {
    try {
      const payload = verify(token, this.secret) as Payload;
      return payload;
    } catch (err) {
      console.log(err);
      throw new Error('Invalid token');
    }
  }
}

export default JWTProvider;
