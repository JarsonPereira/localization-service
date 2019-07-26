import { Module } from '@nestjs/common';
import { StateController } from './controllers/state.controller';
import { StateService } from './service/state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './domain/state.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([State]),
  ],
  controllers: [StateController],
  providers: [StateService],
})

export class LocalizationModule {}