import { Module } from '@nestjs/common';
import { StateController } from './controllers/state.controller';
import { StateService } from './services/state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './domain/state.entity';
import { City } from './domain/city.entity';
import { Street } from './domain/street.entity';
import { District } from './domain/district.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([State,City,Street,District]),
  ],
  controllers: [StateController],
  providers: [StateService],
})

export class LocalizationModule {}