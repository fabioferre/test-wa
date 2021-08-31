import { IsNotEmpty } from "class-validator";

export class CreateLaboratoryDto {

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    address:string;



}
