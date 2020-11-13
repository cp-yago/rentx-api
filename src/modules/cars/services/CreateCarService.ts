import Car from '@modules/cars/infra/typeorm/entities/Car';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  name: string;
  brand: string;
  model: string;
  fuel_type: string;
  transmission_type: string;
  max_velocity: number;
  zero_to_hundred: number;
  seats: number;
  hp: number;
  daily_value: number;
}

class CreateCarService {
  constructor(private carsRepository: ICarsRepository) {}

  public async execute({
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
  }: IRequest): Promise<Car> {
    return await this.carsRepository.create({
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
  }
}

export default CreateCarService;
