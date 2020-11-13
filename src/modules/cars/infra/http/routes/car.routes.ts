import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import CarsController from '../controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      brand: Joi.string().required(),
      model: Joi.string().required(),
      fuel_type: Joi.string().required(),
      transmission_type: Joi.string().required(),
      max_velocity: Joi.number().required(),
      zero_to_hundred: Joi.number().required(),
      seats: Joi.number().integer().required(),
      hp: Joi.number().required(),
      daily_value: Joi.number().required(),
    },
  }),
  carsController.create,
);

export default carsRouter;
