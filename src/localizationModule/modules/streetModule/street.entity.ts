import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Localization } from "../../shared/location.shared";
import { Options } from "@nestjs/common";
import { District } from "../districtModule/district.entity";

@Entity()
export class Street extends Localization {

    constructor(name: string, postalCode: number,
        description: string, latitude: string,
        longitude: string, reference: string, idDistrict: number) {
        super();

        this.name = name;
        this.postalCode = postalCode;
        this.description = description,
            this.latitude = latitude;
        this.longitude = longitude;
        this.reference = reference;
        this.idDistrict = idDistrict;
    }

    @Column()
    public name: string;

    @Column({ type: 'decimal' })
    public postalCode: number;

    @Column()
    public description: string;

    @Column()
    public latitude: string;

    @Column()
    public longitude: string;

    @Column()
    public reference: string;

    @Column('int')
    public idDistrict: number;

    @OneToMany(type => District, options => options)
    @JoinColumn({ name: 'idDistrict' })
    public district: District;
}