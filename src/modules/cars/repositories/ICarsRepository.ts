import Car from '@modules/cars/infra/typeorm/entities/Car';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

export default interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
}
