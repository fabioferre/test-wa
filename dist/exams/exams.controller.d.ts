import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class FilterExamDto {
    name: string;
}
export declare class ExamsController {
    private readonly examsService;
    constructor(examsService: ExamsService);
    create(createExamDto: CreateExamDto): Promise<import("./entities/exam.entity").Exam>;
    findAll(): Promise<import("./entities/exam.entity").Exam[]>;
    findOne(id: string): Promise<import("./entities/exam.entity").Exam>;
    update(id: string, updateExamDto: UpdateExamDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    findFromName(filter: any): Promise<import("./entities/exam.entity").Exam[]>;
}
