import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { Injectable } from '@nestjs/common';
import { CreateLaboratoryDto } from './dto/create-laboratory.dto';
import { UpdateLaboratoryDto } from './dto/update-laboratory.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LaboratoryService {
 
  constructor(
    @InjectRepository(Laboratory)
    private laboratoryRepository: Repository<Laboratory>,
  ) {}

  create(createLaboratoryDto: CreateLaboratoryDto) {
    
    return this.laboratoryRepository.save(createLaboratoryDto);
  }

  findAll() {
    return this.laboratoryRepository.find();
  }

  findOne(id: number) {
    return this.laboratoryRepository.findOne(id);
  }

  update(id: number, updateLaboratoryDto: UpdateLaboratoryDto) {
    return this.laboratoryRepository.update(id, updateLaboratoryDto)
  }

  remove(id: number) {
    return this.laboratoryRepository.delete(id);
  }
}
