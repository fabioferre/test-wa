export declare class CreateExamDto {
    id: number;
    name: string;
    type: 'analise clinica' | 'imagem';
    status: 'Ativo' | 'Inativo';
    laboratoryIds: Array<[number]>;
}
