import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();

app.use(cors);
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'ok',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on http://localhost:${port} 🚀`);
});
