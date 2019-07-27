import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Street } from "../streetModule/street.entity";
import { Localization } from "../../shared/location.shared";
import { City } from "../cityModule/city.entity";

@Entity()
export class District extends Localization {

    constructor(name: string, reference: string, idCity: number) {
        super();
        this.name = name;
        this.reference = reference;
        this.idCity = idCity;
    }

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public reference: string;

    @Column('int')
    public idCity: number;
}


