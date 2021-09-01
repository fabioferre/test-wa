import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { CreateExamDto } from './create-exam.dto';


export class UpdateExamDto extends PartialType(CreateExamDto) {



}
