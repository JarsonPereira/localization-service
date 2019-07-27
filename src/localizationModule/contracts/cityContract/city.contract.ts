import { Injectable } from "@nestjs/common";
import { Contract } from "../constract";
import { RegisterCityInput } from "src/localizationModule/commands/inputs/city/registerCity.input";
import { Flunt } from "src/utils/Flunt";
import { RegisterStateInput } from "src/localizationModule/commands/inputs/state/registerState.input";
import { StateContract } from "../stateContract/state.contract";

@Injectable()
export class CityContract implements Contract {
    errors: any;

    validate(model: RegisterCityInput): boolean {
        const flunt = new Flunt();

        flunt.isRequired(model.name,  "Informe o nome da cidade.");
        flunt.isRequired(model.reference,  "Informe a referência.");
        let state = new StateContract();
        let registerState = new RegisterStateInput();
        registerState.name = model.state.name;
        registerState.initials = model.state.initials;
        let stateValid = state.validate(registerState);

        if(!stateValid){
            flunt.errors.push('Informe um estado válido.');
        }

       



        this.errors = flunt.errors;
        return flunt.errors.length === 0;
    }


}