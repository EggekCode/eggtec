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

const app = express();

connect(mongodbUri, mongodbOptions, () => {
  console.log('DB Connected');
});

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Server running 🚀',
  });
});

app.use('/api', routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
