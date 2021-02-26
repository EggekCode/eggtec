import { Router } from 'express';

const sessionsRouter = Router();

import CreateSessionService from '../services/CreateSessionService';

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSessionService = new CreateSessionService();

  const {user, token} = await createSessionService.execute({email, password});

  // @ts-expect-error
  delete user.password;

  return response.json({ user, token });

});

export default sessionsRouter;
