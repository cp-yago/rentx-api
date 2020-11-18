import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import IRentalsRepository from '@modules/rentals/repositories/IRentalsRepository';

interface IRequest {
  car_id: string;
  client_id: string;
  start_date: Date;
  end_date: Date;
  total: number;
}

class CreateRentalService {
  constructor(private rentalsRepository: IRentalsRepository) {}

  public async execute({
    car_id,
    client_id,
    start_date,
    end_date,
    total,
  }: IRequest): Promise<Rental> {
    return await this.rentalsRepository.create({
      car_id,
      client_id,
      start_date,
      end_date,
      total,
    });
  }
}

export default CreateRentalService;
