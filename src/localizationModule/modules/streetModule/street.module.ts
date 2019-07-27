import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Street } from "./street.entity";
import { StreetService } from "src/localizationModule/streetModule/street.service";
import { StreetController } from "./street.controller";



@Module({
    imports: [
      TypeOrmModule.forFeature([Street]),
    ],
    controllers:[StreetController],
    providers:[StreetService]
  })
  
export class StreetModule { }