import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { CreateLaboratoryDto } from './create-laboratory.dto';


export class UpdateLaboratoryDto extends PartialType(CreateLaboratoryDto) {

}
