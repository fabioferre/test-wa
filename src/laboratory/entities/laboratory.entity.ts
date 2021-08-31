import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'laboratory'})
export class Laboratory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, })
    address: string;

    @Column({ nullable: true, default: 'Ativo',})
    status: string;

}
