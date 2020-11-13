import { getRepository, Repository } from 'typeorm';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
import Car from '@modules/cars/infra/typeorm/entities/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async create(carData: ICreateCarDTO): Promise<Car> {
    const car = await this.ormRepository.create(carData);

    return await this.ormRepository.save(car);
  }

  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }
}

export default CarsRepository;
