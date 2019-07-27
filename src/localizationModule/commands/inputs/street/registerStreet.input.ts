import { District } from "src/localizationModule/modules/districtModule/district.entity";

export class RegisterStreetInput {

    public name: string;

    public postalCode: number;

    public description: string;

    public latitude: string;

    public longitude: string;

    public reference: string;

    public idDistrict: number;
}