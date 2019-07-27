import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { State } from "./state.entity";
import { District } from "./district.entity";
import { Localization } from "../shared/location.shared";

@Entity()
export class City extends Localization {

    constructor(
        _name: string, _reference: string, _state: State, _districts: District[]
    ) {
        super();
        this.name = _name;
        this.reference = _reference;
        this.state = _state;
        this.districts = _districts;

    }

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public reference: string;

    @Column('varchar')
    public state: State;

    @Column('varchar')
    @ManyToOne(type => District, options => options)
    public districts: District[];

}


