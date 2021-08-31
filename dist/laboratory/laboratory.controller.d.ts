import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
export declare class LaboratoryController {
    private readonly laboratoryService;
    constructor(laboratoryService: LaboratoryService);
    create(createLaboratoryDto: CreateLaboratoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLaboratoryDto: UpdateLaboratoryDto): string;
    remove(id: string): string;
}
