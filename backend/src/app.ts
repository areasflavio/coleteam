import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

import Routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.post('/user', function (req, res) {
  console.log(req.body);

  res.status(200).json(req.body);
});

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

export default app;
