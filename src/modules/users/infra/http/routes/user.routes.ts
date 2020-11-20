import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import UsersController from '../controllers/UsersController';
import ensureUserIsAuthenticated from '../middlewares/ensureUserIsAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      admin: Joi.boolean(),
    },
  }),
  usersController.create,
);

usersRouter.put('/', ensureUserIsAuthenticated, usersController.update);

export default usersRouter;
