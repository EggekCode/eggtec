import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password, job, techs } = request.body;

  const createUserService = new CreateUserService();

  try {
    const user = await createUserService.execute({ name, email, password, job, techs });

    return response.json(user);

  } catch (err) {
    return response.json({
      error: err.message,
    });
  }

});

export default usersRouter;
