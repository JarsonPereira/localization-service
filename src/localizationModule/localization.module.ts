import { Module } from '@nestjs/common';
import { DistrictModule } from './modules/districtModule/district.module';
import { StateModule } from './modules/stateModule/state.module';
import { CityModule } from './modules/cityModule/city.module';
import { StreetModule } from './modules/streetModule/street.module';

// Modulo de informações sobre localização
@Module({
  imports: [
    DistrictModule,StateModule,CityModule,StreetModule,
  ],
  controllers: [],
  providers: [],
})

export class LocalizationModule { }