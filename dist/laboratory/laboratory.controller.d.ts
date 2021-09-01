import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
export declare class LaboratoryController {
    private readonly laboratoryService;
    constructor(laboratoryService: LaboratoryService);
    create(createLaboratoryDto: CreateLaboratoryDto): Promise<CreateLaboratoryDto & import("./entities/laboratory.entity").Laboratory>;
    findAll(): Promise<import("./entities/laboratory.entity").Laboratory[]>;
    findOne(id: string): Promise<import("./entities/laboratory.entity").Laboratory>;
    update(id: string, updateLaboratoryDto: UpdateLaboratoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    removeAll(): Promise<import("typeorm").DeleteResult>;
}
