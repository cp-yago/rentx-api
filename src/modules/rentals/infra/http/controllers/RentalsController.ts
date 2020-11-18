import { Request, Response } from 'express';

import RentalsRepository from '@modules/rentals/infra/typeorm/repositories/RentalsRepository';
import CreateRentalService from '@modules/rentals/services/CreateRentalService';

export default class RentalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { car_id, client_id, start_date, end_date, total } = request.body;

    const rentalsRepository = new RentalsRepository();
    const createRental = new CreateRentalService(rentalsRepository);

    const rental = await createRental.execute({
      car_id,
      client_id,
      start_date,
      end_date,
      total,
    });

    return response.status(201).json(rental);
  }
}
