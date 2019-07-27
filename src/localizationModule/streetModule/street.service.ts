import { Street } from "../modules/streetModule/street.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class StreetService {
    constructor(
        @InjectRepository(Street)
        private readonly repository: Repository<Street>,
    ) { }

    async get(): Promise<Street[]> {

        return await this.repository.find();
    }

    async getById(id: number): Promise<Street> {

        return await this.repository.findOne(id);
    }

    async post(street: Street) {
        street.createdAt = new Date().toLocaleString();
        await this.repository.save(street);
    }

    async put(id: number, street: Street) {
        street.updateAt = new Date().toLocaleString();
        await this.repository.update(id, street);
    }

    async delete(id: number) {

        await this.repository.delete(id);
    }


}