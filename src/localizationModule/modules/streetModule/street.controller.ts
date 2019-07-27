import { Controller, Get, HttpException, HttpStatus, Param, Post, UseInterceptors, Body, Put, Delete } from "@nestjs/common";
import { Result } from "../../commands/outputs/result.output";
import { ValidatorInterceptor } from "../../interceptors/validator.interceptor";
import { StreetContract } from "../../contracts/streetContract/street.contract";
import { RegisterStreetInput } from "../../commands/inputs/street/registerStreet.input";
import { Street } from "./street.entity";
import { StreetService } from "./street.service";

@Controller('api/streets')
export class StreetController {
    constructor(
        private readonly districtService: StreetService,
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
    @UseInterceptors(new ValidatorInterceptor(new StreetContract()))
    async create(@Body() body: RegisterStreetInput) {
        try {
            let street = new Street(body.name, body.postalCode, body.description,
                body.latitude, body.longitude, body.reference, body.idDistrict);

            await this.districtService.post(street);
            return new Result(true, 'Inserido com sucesso.', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UseInterceptors(new ValidatorInterceptor(new StreetContract()))
    async put(@Param('id') identifier: number, @Body() body: RegisterStreetInput) {

        try {
            let street = new Street(body.name, body.postalCode, body.description,
                body.latitude, body.longitude, body.reference, body.idDistrict);

            await this.districtService.put(identifier, street);
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