import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoppingBasket {
  @PrimaryGeneratedColumn()
  id: number;
}
