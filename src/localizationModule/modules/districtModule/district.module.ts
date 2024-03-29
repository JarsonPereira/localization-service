import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { District } from "./district.entity";
import { DistrictService } from "./district.service";
import { DistrictController } from "./district.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([District]),
    ],
    providers:[DistrictService],
    controllers:[DistrictController]
})

export class DistrictModule { }