import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ApiBody, ApiParam, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Exam } from './entities/exam.entity';
export class FilterExamDto {
  @ApiProperty()
  @IsNotEmpty()
  name:string;
}
@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  @ApiBody({type:CreateExamDto, description:'Criar um exame novo'})

  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  findAll() {
    return this.examsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto):Promise<Exam>{
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

  @Post('filter')
  @HttpCode(HttpStatus.OK)
  @ApiBody({type:FilterExamDto, description:'Filtrar exames'})
  findFromName(@Body() filter) {
    return this.examsService.findFromName(filter);
  }

}
