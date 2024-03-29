import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "./city.entity";
import { Module } from "@nestjs/common";
import { CityService } from "./city.service";
import { CityController } from "./city.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([City]),
    ],
    providers: [CityService],
    controllers: [CityController]
})

export class CityModule { }