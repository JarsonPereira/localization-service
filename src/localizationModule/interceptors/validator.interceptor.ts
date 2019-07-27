import { NestInterceptor, Injectable, ExecutionContext, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { Contract } from "../contracts/constract";
import { Result } from "../commands/outputs/result.output";


@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    constructor(public contract: Contract) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        const body = context.switchToHttp().getRequest().body;
        const valid = this.contract.validate(body);

        if (!valid) {
            throw new HttpException(
                new Result(false, 'Informe os dados corretos...', null, this.contract.errors),
                HttpStatus.BAD_REQUEST
            );
        }
       
        return next.handle();
    }
}