import Rental from '@modules/rentals/infra/typeorm/entities/Rental';
import ICreateRentalDTO from '@modules/rentals/dtos/ICreateRentalDTO';

export default interface IRentalsRepository {
  create(data: ICreateRentalDTO): Promise<Rental>;
}
