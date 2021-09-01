import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsInt, IsNotEmpty, ValidateNested, ValidatePromise } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

enum Status{
    active = 'Ativo',
    inactive = 'Inativo',
    default = ''
}

enum Type{
    analysis = 'analise clinica',
    image = 'imagem'
}

export class CreateExamDto {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty({})
    @IsNotEmpty()
    @IsEnum(Type)
    type:'analise clinica'|'imagem' ;

    @ApiProperty()
    @IsEnum(Status)
    status:'Ativo'|'Inativo' ;

    @ApiProperty({})
    @IsNotEmpty()
    @IsArray()
    laboratoryIds:Array<number>;


   

}
