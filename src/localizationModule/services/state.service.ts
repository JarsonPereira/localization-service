import { Injectable } from "@nestjs/common";
import { State } from "../domain/state.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(State)
        private readonly repository: Repository<State>,
    ) { }

    async get(): Promise<State[]> {

        return await this.repository.find();
    }

    async getById(id:number): Promise<State> {

        return await this.repository.findOne(id);
    }

    async post(state: State) {
        state.createdAt = new Date().toLocaleString();
        await this.repository.save(state);
    }

    async put(id: number, state: State) {
         state.updateAt = new Date().toLocaleString();
        await this.repository.update(id, state);
    }

    async delete(id: number) {

        await this.repository.delete(id);
    }


}