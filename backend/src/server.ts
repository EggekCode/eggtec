import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

import routes from './routes/index';

config();

const mongodbUri = String(process.env.MONGODB_URI);
const mongodbOptions: ConnectOptions = {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connect(mongodbUri, mongodbOptions, () => {
  // eslint-disable-next-line no-console
  console.log('db connected');
});

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({
    message: 'server runing 🚀',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on http://localhost:${port} 🚀`);
});
