import { Router } from 'express';

const sessionsRouter = Router();

import CreateSessionService from '../services/CreateSessionService';

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const createSessionService = new CreateSessionService();

  try {
    const { user, token } = await createSessionService.execute({ email, password });

    // @ts-expect-error
    delete user.password;

    return res.json({ user, token });
  } catch (err) {
    return res.json({
      error: err.message,
    });
  }
});

export default sessionsRouter;
