import { RegisterStreetInput } from "src/localizationModule/commands/inputs/street/registerStreet.input";
import { Contract } from "../constract";
import { Injectable } from "@nestjs/common";
import { Flunt } from "src/utils/Flunt";
import { RegisterDistrictInput } from "src/localizationModule/commands/inputs/district/registerDistrict.input";

@Injectable()
export class StreetContract implements Contract {
    errors: any;

    validate(model: RegisterStreetInput): boolean {
        const flunt = new Flunt();

        flunt.isRequired(model.name,  "Informe o nome da rua.");
        flunt.isRequired(model.description,  "Informe a descrição da rua.");
        flunt.isRequired(model.latitude,  "Informe a latitude.");
        flunt.isRequired(model.longitude, "Informe a longitude.");
        flunt.isRequired(model.postalCode, "Informe a codigo postal.");
        flunt.isFixedLen(model.postalCode, 8, "O codigo postal precisa ter 8 caracteres. ");
        flunt.isRequired(model.reference, "Informe a referência.");
        flunt.hasMinLen(model.idDistrict,1, "Informe o identificador  do distrito.");
        
        this.errors = flunt.errors;
        return flunt.valid();
    }


}