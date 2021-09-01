import { PartialType } from '@nestjs/mapped-types';
import { IsArray } from 'class-validator';
import { CreateExamDto } from './create-exam.dto';

export class UpdateExamDto extends PartialType(CreateExamDto) {


    @IsArray()
    laboratoryIds:Array<[]>;
}
