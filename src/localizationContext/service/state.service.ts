import { Injectable } from "@nestjs/common";
import { State } from "../domain/state.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class StateService{
    constructor(
        @InjectRepository(State)
        private readonly repository: Repository<State>,
    ) { }

    async get(): Promise<State[]> {
        return await this.repository.find();
    }

    async post(state: State) {
        
        await this.repository.save(state);
    }

   
}