import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';
export declare class FilterExamDto {
    name: string;
}
export declare class ExamsController {
    private readonly examsService;
    constructor(examsService: ExamsService);
    create(createExamDto: CreateExamDto): Promise<Exam>;
    findAll(): Promise<Exam[]>;
    findOne(id: string): Promise<Exam>;
    update(id: string, updateExamDto: UpdateExamDto): Promise<Exam>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    findFromName(filter: any): Promise<Exam[]>;
}
