import express from 'express';
import { connect, ConnectOptions } from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();

const mongodbUri = String(process.env.MONGODB_URI);
const mongodbOptions: ConnectOptions = {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

connect(mongodbUri, mongodbOptions, () => {
  console.log('\x1b[32m', '\nConnected in BD');
});

const app = express();

app.use(cors);
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'Ok 🚀',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('\x1b[36m', `\nServer running on http://localhost:${port} 🚀`);
});
