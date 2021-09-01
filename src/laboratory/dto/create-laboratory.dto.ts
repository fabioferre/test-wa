import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

enum Status{
    active = 'Ativo',
    inactive = 'Inativo'
}
export class CreateLaboratoryDto {
    @ApiProperty()
    @IsNotEmpty()
    name:string;
    
    @ApiProperty()
    @IsNotEmpty()
    address:string;

    @ApiProperty({})
    @IsEnum(Status)
    status:'Ativo'|'Inativo' ;





}
