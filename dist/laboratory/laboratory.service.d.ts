import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { Repository } from 'typeorm';
export declare class LaboratoryService {
    private laboratoryRepository;
    constructor(laboratoryRepository: Repository<Laboratory>);
    create(createLaboratoryDto: CreateLaboratoryDto): Promise<CreateLaboratoryDto & Laboratory>;
    findAll(): Promise<Laboratory[]>;
    findOne(id: number): Promise<Laboratory>;
    update(id: number, updateLaboratoryDto: UpdateLaboratoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
