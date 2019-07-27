import { City } from "./city.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly repository: Repository<City>,
    ) { }

    async get(): Promise<City[]> {

        return await this.repository.find();
    }

    async getById(id:number): Promise<City> {

        return await this.repository.findOne(id);
    }

    async post(city: City) {
        city.createdAt = new Date().toLocaleString();
        await this.repository.save(city);
    }

    async put(id: number, city: City) {
        city.updateAt = new Date().toLocaleString();
        await this.repository.update(id, city);
    }

    async delete(id: number) {

        await this.repository.delete(id);
    }


}