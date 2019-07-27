import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { District } from "./district.entity";
import { Localization } from "../shared/location.shared";
import { Options } from "@nestjs/common";

@Entity()
export class Street extends Localization {

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

    @OneToMany(type => District,Options=>Options.streets)
    @JoinColumn({ name: "idDistrict" })
    public district: District;
}