import { getRepository, Repository } from 'typeorm';

import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import IRentalsRepository from '@modules/rentals/repositories/IRentalsRepository';
import ICreateRentalDTO from '@modules/rentals/dtos/ICreateRentalDTO';

class RentalsRepository implements IRentalsRepository {
  private ormRepository: Repository<Rental>;

  constructor() {
    this.ormRepository = getRepository(Rental);
  }

  public async create(rentalData: ICreateRentalDTO): Promise<Rental> {
    const rental = await this.ormRepository.create(rentalData);

    return await this.ormRepository.save(rental);
  }

  public async save(rental: Rental): Promise<Rental> {
    return this.ormRepository.save(rental);
  }
}

export default RentalsRepository;
