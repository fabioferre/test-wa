import { IsNotEmpty } from "class-validator";

export class CreateLaboratoryDto {
    @IsNotEmpty({'message':'id obrigatorio'})
    id:number;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    status:boolean;


}
