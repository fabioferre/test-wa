import { Exam } from "src/exams/entities/exam.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(() => Exam)
    @JoinTable()
    exams: Exam[];
}
