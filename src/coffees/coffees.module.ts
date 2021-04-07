import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavors } from './entities/flavors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavors, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
