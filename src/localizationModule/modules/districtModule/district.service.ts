import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { District } from "./district.entity";

@Injectable()
export class DistrictService {
    constructor(
        @InjectRepository(District)
        private readonly repository: Repository<District>,
    ) { }

    async get(): Promise<District[]> {

        return await this.repository.find();
    }

    
    async getById(id:number): Promise<District> {

        return await this.repository.findOne(id);
    }

    async post(district: District) {
        district.createdAt = new Date().toLocaleString();
        await this.repository.save(district);
    }

    async put(id: number, district: District) {
        district.updateAt = new Date().toLocaleString();
        await this.repository.update(id, district);
    }

    async delete(id: number) {

        await this.repository.delete(id);
    }


}