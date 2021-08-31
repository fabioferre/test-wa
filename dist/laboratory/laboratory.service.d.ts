import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
export declare class LaboratoryService {
    create(createLaboratoryDto: CreateLaboratoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLaboratoryDto: UpdateLaboratoryDto): string;
    remove(id: number): string;
}
