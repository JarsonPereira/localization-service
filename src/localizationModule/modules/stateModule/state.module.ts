import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { State } from "./state.entity";
import { StateController } from "./state.controller";
import { StateService } from "./state.service";


@Module({
    imports: [
      TypeOrmModule.forFeature([State]),
    ],
    controllers:[StateController],
    providers:[StateService]
  })
  
export class StateModule { }