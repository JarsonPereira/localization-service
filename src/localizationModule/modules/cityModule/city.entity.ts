import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, JoinTable } from "typeorm";
import { State } from "../stateModule/state.entity";
import { District } from "../districtModule/district.entity";
import { Localization } from "../../shared/location.shared";

@Entity()
export class City extends Localization {

    constructor(
        _name: string, _reference: string, _idState: number, _districts: District[]
    ) {
        super();
        this.name = _name;
        this.reference = _reference;
        this.idState = _idState;
        this.districts = _districts;

    }

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public reference: string;

    @Column('int')
    public idState: number;

    @OneToMany(type => District, options => options.idCity)
    public districts: District[];

}


