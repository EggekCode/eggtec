import Users from '../schemas/Users';

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
      throw new Error('Usuário já cadastrado.');
    }

    const user = await Users.create({ name, email, password, job, techs });

    return user;
  }
}
