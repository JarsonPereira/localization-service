import { DistrictContract } from "../../contracts/districtContract/district.contract";
import { ValidatorInterceptor } from "../../interceptors/validator.interceptor";
import { UseInterceptors, Post, Controller, Get, HttpException, HttpStatus, Param, Body, Put, Delete } from "@nestjs/common";
import { DistrictService } from "./district.service";
import { Result } from "../../commands/outputs/result.output";
import { RegisterCityInput } from "../../commands/inputs/city/registerCity.input";
import { City } from "../cityModule/city.entity";
import { District } from "./district.entity";
import { CityContract } from "../../contracts/cityContract/city.contract";
import { RegisterDistrictInput } from "../../commands/inputs/district/registerDistrict.input";

@Controller('api/districts')
export class DistrictController {
    constructor(
        private readonly districtService: DistrictService,
    ) { }

    @Get()
    async browse() {
        try {
            let item = await this.districtService.get();
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async read(@Param('id') id) {
        try {
            let item = await this.districtService.getById(id);
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new DistrictContract()))
    async create(@Body() body: RegisterDistrictInput) {
        try {
            let district = new District(body.name, body.reference, body.idCity);

            await this.districtService.post(district);
            return new Result(true, 'Inserido com sucesso.', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UseInterceptors(new ValidatorInterceptor(new DistrictContract()))
    async put(@Param('id') identifier: number, @Body() body: RegisterDistrictInput) {

        try {
            let district = new District(body.name, body.reference, body.idCity);

            await this.districtService.put(identifier, district);
            return new Result(true, 'Atualizado com sucesso', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async delete(@Param('id') identifier: number) {
        try {

            await this.districtService.delete(identifier);
            return new Result(true, 'Excluido com sucesso', identifier, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }
}