import { Controller, Post, Get, Body, UseInterceptors, HttpException, HttpStatus } from "@nestjs/common";
import { StateService } from "../service/state.service";
import { create } from "domain";
import { CreateStateInput } from "../commands/inputs/createdState.input";
import { State } from "../domain/state.entity";
import { Result } from "../commands/outputs/result.output";
import { ValidatorInterceptor } from "../interceptors/validator.interceptor";
import { StateContract } from "../contracts/state.contract";

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

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new StateContract()))
    async create(@Body() body: CreateStateInput) {
        console.log('...........aqui');
        try {
            console.log('trye');
            let state = new State(body.name, body.initials);
            console.log(state)
            await this.stateService.post(state);
            return new Result(true, '', body.name, null);
        } catch{
            throw new HttpException(new Result(false, 'BadRequest()', {}, []), HttpStatus.BAD_REQUEST);
        }

    }
}