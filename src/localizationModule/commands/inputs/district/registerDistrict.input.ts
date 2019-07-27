import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Street } from "src/localizationModule/modules/streetModule/street.entity";


export class RegisterDistrictInput {

    public name: string;

    public reference: string;

    public idCity: number;

    public streets: Street[];
}

