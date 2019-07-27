import { State } from "src/localizationModule/modules/stateModule/state.entity";
import { District } from "src/localizationModule/modules/districtModule/district.entity";

export class RegisterCityInput {

    public name: string;
    public reference: string;
    public idState: number;
    public districts: District[];

}