import { Contract } from "../constract";
import { Injectable } from "@nestjs/common";
import { Flunt } from "../../../utils/Flunt";
import { State } from "../../domain/state.entity";
import { CreateConfigItemOptions } from "@babel/core";
import { RegisterStateInput } from "../../commands/inputs/state/registerState.input";

@Injectable()
export class StateContract implements Contract {
    errors: any;

    validate(model: RegisterStateInput): boolean {
        const flunt = new Flunt();

        flunt.isRequired(model.name,  "Informe o estado.");
        flunt.isRequired(model.initials,  "informe a sigla.");
        flunt.hasMinLen(model.name, 5, "Estado inválido.");
        flunt.isFixedLen(model.initials, 2, "Sigla inválida.");

        this.errors = flunt.errors;
        return flunt.valid();
    }


}