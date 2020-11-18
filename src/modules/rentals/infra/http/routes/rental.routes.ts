import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import RentalsController from '../controllers/RentalsController';

const rentalsRouter = Router();
const rentalsController = new RentalsController();

rentalsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      car_id: Joi.string().required(),
      client_id: Joi.string().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
      total: Joi.number().required(),
    },
  }),
  rentalsController.create,
);

export default rentalsRouter;
