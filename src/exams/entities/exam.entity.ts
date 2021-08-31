
import { Laboratory } from "src/laboratory/entities/laboratory.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'exams'})

export class Exam {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false,  default: 'Analise clinica'})
    type: string;

    @Column({ nullable: true, default: 'Ativo'})
    status: string;

    @ManyToMany(() => Laboratory)
    @JoinTable()
    laboratories: Laboratory[];

}
