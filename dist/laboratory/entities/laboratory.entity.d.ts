import { Exam } from "src/exams/entities/exam.entity";
export declare class Laboratory {
    id: number;
    name: string;
    address: string;
    status: string;
    exams: Exam[];
}
