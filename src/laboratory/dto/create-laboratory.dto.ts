import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
enum TypeStatus{
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
    @IsNotEmpty()
    @IsEnum(TypeStatus)
    status:'Ativo'|'Inativo' ;



}
