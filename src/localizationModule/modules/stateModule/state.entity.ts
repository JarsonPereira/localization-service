import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Localization } from "../../shared/location.shared";

@Entity()
export class State extends Localization {
    
    constructor(
        _name: string,
        _initials: string,

    ) {

        super();
        this.name = _name;
        this.initials = _initials;

    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public initials: string;


}


