import { Controller, HttpException, HttpStatus, Get, Post, Body, UseInterceptors, Put, Param, Delete } from "@nestjs/common";
import { CityService } from "../services/city.service";
import { Result } from "../commands/outputs/result.output";
import { RegisterCityInput } from "../commands/inputs/city/registerCity.input";
import { City } from "../domain/city.entity";
import { ValidatorInterceptor } from "../interceptors/validator.interceptor";
import { CityContract } from "../contracts/cityContract/city.contract";
import { async } from "rxjs/internal/scheduler/async";


@Controller('api/cities')
export class CityController {
    constructor(
        private readonly cityService: CityService,
    ) { }

    @Get()
    async browse() {
        try {
            let item = await this.cityService.get();
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async read(@Param('id') id) {
        try {
            let item = await this.cityService.getById(id);
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CityContract()))
    async create(@Body() body: RegisterCityInput) {
        try {
            let city = new City(body.name, body.reference, body.state, body.districts);
            await this.cityService.post(city);
            return new Result(true, 'Inserido com sucesso.', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UseInterceptors(new ValidatorInterceptor(new CityContract()))
    async put(@Param('id') identifier: number, @Body() body: RegisterCityInput) {
        console.log('1');
        try {
            let city = new City(body.name, body.reference, body.state, body.districts);
            await this.cityService.put(identifier, city);
            return new Result(true, 'Atualizado com sucesso', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async delete(@Param('id') identifier: number) {
        try {

            await this.cityService.delete(identifier);
            return new Result(true, 'Excluido com sucesso', identifier, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }


}