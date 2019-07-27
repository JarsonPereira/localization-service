import { Contract } from "../constract";
import { Injectable } from "@nestjs/common";
import { RegisterDistrictInput } from "src/localizationModule/commands/inputs/district/registerDistrict.input";
import { Flunt } from "src/utils/Flunt";
import { RegisterStreetInput } from "src/localizationModule/commands/inputs/street/registerStreet.input";

@Injectable()
export class DistrictContract implements Contract {
    errors: any;

    validate(model: RegisterDistrictInput): boolean {
        const flunt = new Flunt();

        flunt.isRequired(model.name, "Informe o nome da Cidade.");
        flunt.isRequired(model.reference, "Informe a referência.");
        flunt.hasMinLen(model.name, 5, "Nome do estado precisa ser maior que 5 caracteres.");
        flunt.hasMinLen(model.reference, 10, "Referência do estado precisa ser maior que 10 caracteres.");


        this.errors = flunt.errors;
        return flunt.errors.length === 0;
    }


}