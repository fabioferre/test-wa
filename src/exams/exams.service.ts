import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';


@Injectable()
export class ExamsService {

  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
    @InjectRepository(Laboratory)
    private laboratoryRepository: Repository<Laboratory>,
  ) { }

 async create(createExamDto: CreateExamDto) {
    const examModel =  this.examRepository.create(createExamDto);
    examModel.laboratories =  (await this.laboratoryRepository.findByIds(createExamDto.laboratoryIds)).filter((lab:any)=> lab.status == 'Ativo')
    
    return this.examRepository.save(examModel)

  }

  findAll(filter) {
    let where = filter ? filter : {}
    return this.examRepository.find({ relations: ["laboratories"], where });
  }

  findOne(id: number) {
    return this.examRepository.findOne(id, { relations: ["laboratories"] });
  }

  async update(id: number, updateExamDto: UpdateExamDto) {

    const examModel = await this.examRepository.findOne(id);
    examModel.laboratories = (await this.laboratoryRepository.findByIds(updateExamDto.laboratoryIds)).filter((lab:any)=> lab.status == 'Ativo')
    this.examRepository.save(examModel)
    delete  updateExamDto.laboratoryIds

    return this.examRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examRepository.delete(id);
  }

  removeAll() {
    return this.examRepository.delete({});
  }
}
