import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Rental from '@modules/rentals/infra/typeorm/entities/Rental';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @OneToMany(() => Rental, rental => rental.user)
  rentals: Rental[];
}

export default User;
