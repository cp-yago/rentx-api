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
  car_id: string;

  @Column()
  client_id: string;

  @Column('timestamp with time zone')
  start_date: Date;

  @Column('timestamp with time zone')
  end_date: Date;

  @Column()
  total: number;

  @OneToOne(type => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @ManyToOne(() => User, user => user.rentals)
  @JoinColumn({ name: 'client_id' })
  user: User;
}

export default Rental;
