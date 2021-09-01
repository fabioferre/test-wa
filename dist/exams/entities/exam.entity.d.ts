import { Laboratory } from "src/laboratory/entities/laboratory.entity";
export declare class Exam {
    id: number;
    name: string;
    type: string;
    status: 'Ativo' | 'Inativo';
    laboratories: Laboratory[];
}
