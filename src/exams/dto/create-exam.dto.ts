import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsInt, IsNotEmpty, ValidateNested, ValidatePromise } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

enum TypeStatus{
    active = 'Ativo',
    inactive = 'Inativo'
}


export class CreateExamDto {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty({})
    @IsNotEmpty()
    type:'analise clinica'|'imagem' ;

    @ApiProperty({})
    @IsNotEmpty()
    @IsEnum(TypeStatus)
    status:'Ativo'|'Inativo' ;

    @ApiProperty({})
    @IsNotEmpty()
    @IsArray()
    laboratoryIds:Array<[]>;


   

}
