export default interface ICreateCarDTO {
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
