import Users from '../schemas/Users';
import { hash } from 'bcryptjs';

interface Request {
  name: string;
  email: string;
  password: string;
  job: string;
  techs: [{ name: string }];
  favorites?: [
    {
      project: string;
      finished: boolean;
    },
  ];
}

export default class CreateUserService {
  public async execute({
    name,
    email,
    password,
    job,
    techs,
  }: Request): Promise<Document | any> {
    const checkUserExists = await Users.findOne({ email });

    if (checkUserExists) {
      throw new Error('Usuário ja cadastrado.');
    }

    const passwordHash = await hash(password, 8);

    const user = await Users.create({ name, email, password: passwordHash, job, techs });

    return user;
  }
}
