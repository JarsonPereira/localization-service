import { State } from "src/localizationModule/domain/state.entity";
import { District } from "src/localizationModule/domain/district.entity";

export class RegisterCityInput {

    public name: string;
    public reference: string;
    public state: State;
    public districts : District[];
    
}