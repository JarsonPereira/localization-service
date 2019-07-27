import { Injectable } from "@nestjs/common";
import { Contract } from "../constract";
import { RegisterCityInput } from "src/localizationModule/commands/inputs/city/registerCity.input";
import { Flunt } from "src/utils/Flunt";

@Injectable()
export class CityContract implements Contract {
    errors: any;

    validate(model: RegisterCityInput): boolean {
        const flunt = new Flunt();

        flunt.isRequired(model.name, "Informe o nome da cidade.");
        flunt.isRequired(model.reference, "Informe a referência.");
        flunt.isRequired(model.idState, "Informe o identificador do estado.");

        this.errors = flunt.errors;
        return flunt.valid();
    }


}