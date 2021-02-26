import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Users, { IUser } from '../schemas/Users';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: IUser;
  token: string;
}

class CreateSessionService {
  public async execute({ email, password }: Request): Promise<Response> {

    const user = await Users.findOne({ email });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const token = sign({}, 'n7d843bd4t3b434', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;