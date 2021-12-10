import express from 'express';
import { celebrate, errors, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const usersController = new UsersController();
const sessionController = new SessionController();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/users/:id', usersController.show);
routes.post(
  '/users',
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  usersController.create
);

routes.post(
  '/sessions',
  celebrate(
    {
      body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.number().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  sessionController.create
);

routes.get('/items', itemsController.index);

routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
