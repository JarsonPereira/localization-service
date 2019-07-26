import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class State {
    constructor(
        public _name: string,
        public _initials: string,

    ) {

        this.name = _name;
        this.initials = _initials;
    }

    @PrimaryGeneratedColumn()
    public id: string;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public initials: string;

    @Column('varchar')
    public createdAt: string;

    @Column('varchar')
    public updateAt: string;

    @Column('varchar')
    public deleteAt: string;

}


