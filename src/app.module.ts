import { Module } from '@nestjs/common';
import { LocalizationModule } from './localizationModule/localization.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    LocalizationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'den1.mysql3.gear.host',
      port: 3306,
      username: 'addressdb',
      password: '**********',
      database: 'addressdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
