import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class ExamsService {
    create(createExamDto: CreateExamDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExamDto: UpdateExamDto): string;
    remove(id: number): string;
}
