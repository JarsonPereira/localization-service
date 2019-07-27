import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Street } from "src/localizationModule/domain/street.entity";


export class RegisterDistrictInput {

    public name: string;

    public reference: string;

    public streets: Street[];
}

