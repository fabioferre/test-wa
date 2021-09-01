import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  @ApiBody({type:CreateExamDto, description:'criar um exame novo'})

  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }


  @Get()
  findAll(@Body() filter) {
    return this.examsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examsService.update(+id, updateExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsService.remove(+id);
  }

  @Delete('')
  removeAll() {
    return this.examsService.removeAll();
  }


}
