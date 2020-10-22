import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Car from '@modules/cars/infra/typeorm/entities/Car';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('rentals')
class Rental {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total: number;

  @OneToOne(type => Car)
  @JoinColumn()
  car: Car;

  @ManyToOne(() => User, user => user.rentals)
  user: User;
}

export default Rental;
