import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  fuel_type: string;

  @Column()
  transmission_type: string;

  @Column()
  max_velocity: number;

  @Column()
  zero_to_hundred: number;

  @Column()
  seats: number;

  @Column()
  hp: number;

  @Column()
  daily_value: number;
}

export default Car;
