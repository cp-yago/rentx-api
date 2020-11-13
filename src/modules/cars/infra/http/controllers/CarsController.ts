import { Request, Response } from 'express';

import CarsRepository from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import CreateCarService from '@modules/cars/services/CreateCarService';

export default class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      brand,
      model,
      fuel_type,
      transmission_type,
      max_velocity,
      zero_to_hundred,
      seats,
      hp,
      daily_value,
    } = request.body;

    const carsRepository = new CarsRepository();

    const createCar = new CreateCarService(carsRepository);

    const car = await createCar.execute({
      name,
      brand,
      model,
      fuel_type,
      transmission_type,
      max_velocity,
      zero_to_hundred,
      seats,
      hp,
      daily_value,
    });

    return response.status(201).json(car);
  }
}
