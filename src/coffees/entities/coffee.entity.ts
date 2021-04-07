import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavors } from './flavors.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recomandations: number;

  @JoinTable()
  @ManyToMany((type) => Flavors, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors: Flavors[];
}
