import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export abstract class Localization {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', select: false })
    public createdAt: string;

    @Column({ type: 'varchar', select: false })
    public updateAt: string;

    @Column({ type: 'varchar', select: false })
    public deleteAt: string;

}


