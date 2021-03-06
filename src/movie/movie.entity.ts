import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  premiere: string;

  @Column()
  raiting: string;

  @Column()
  awards: string;

  @Column()
  category: string;
}
