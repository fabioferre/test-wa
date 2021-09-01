import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';
export declare class ExamsService {
    private examRepository;
    private laboratoryRepository;
    constructor(examRepository: Repository<Exam>, laboratoryRepository: Repository<Laboratory>);
    create(createExamDto: CreateExamDto): Promise<Exam>;
    findAll(): Promise<Exam[]>;
    findFromName(filter: any): Promise<Exam[]>;
    findOne(id: number): Promise<Exam>;
    update(id: number, updateExamDto: UpdateExamDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    removeAll(): Promise<import("typeorm").DeleteResult>;
}
