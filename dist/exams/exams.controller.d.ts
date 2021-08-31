import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class ExamsController {
    private readonly examsService;
    constructor(examsService: ExamsService);
    create(createExamDto: CreateExamDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExamDto: UpdateExamDto): string;
    remove(id: string): string;
}
