import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Street } from "./street.entity";
import { Localization } from "../shared/location.shared";

@Entity()
export class District extends Localization {

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public reference: string;

    @ManyToOne(type=>Street,photo=>photo.district)
    public  streets: Street[];

}


