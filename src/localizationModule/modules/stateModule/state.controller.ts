import { Controller, Post, Get, Put, Body, UseInterceptors, HttpException, HttpStatus, Param, Delete } from "@nestjs/common";
import { StateService } from "./state.service";
import { create } from "domain";
import { RegisterStateInput } from "../../commands/inputs/state/registerState.input";
import { State } from "./state.entity";
import { Result } from "../../commands/outputs/result.output";
import { ValidatorInterceptor } from "../../interceptors/validator.interceptor";
import { StateContract } from "../../contracts/stateContract/state.contract";
import { identifier } from "@babel/types";

@Controller('api/states')
export class StateController {
    constructor(
        private readonly stateService: StateService,
    ) { }

    @Get()
    async browse() {
        try {
            let item = await this.stateService.get();
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }


    @Get(':id')
    async read(@Param('id') id) {
        try {
            let item = await this.stateService.getById(id);
            return new Result(true, '', item, null);
        } catch{
            throw new HttpException(new Result(false, '', [], null), HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new StateContract()))
    async add(@Body() body: RegisterStateInput) {
        try {
            let state = new State(body.name, body.initials);
            await this.stateService.post(state);
            return new Result(true, 'Inserindo com sucesso.', body.name, null);

        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }

    }

    @Put(':id')
    @UseInterceptors(new ValidatorInterceptor(new StateContract()))
    async edit(@Param('id') identifier: number, @Body() body: RegisterStateInput) {
        console.log('1');
        try {
            let state = new State(body.name, body.initials);
            await this.stateService.put(identifier, state);
            return new Result(true, 'Atualizado com sucesso', body.name, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async delete(@Param('id') identifier: number) {
        try {

            await this.stateService.delete(identifier);
            return new Result(true, 'Excluido com sucesso', identifier, null);
        } catch{
            throw new HttpException(new Result(false, '', {}, []), HttpStatus.BAD_REQUEST);
        }
    }


}