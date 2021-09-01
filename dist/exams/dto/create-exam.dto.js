"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExamDto = void 0;
const laboratory_entity_1 = require("../../laboratory/entities/laboratory.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["active"] = "Ativo";
    Status["inactive"] = "Inativo";
    Status["default"] = "";
})(Status || (Status = {}));
var Type;
(function (Type) {
    Type["analysis"] = "analise clinica";
    Type["image"] = "imagem";
})(Type || (Type = {}));
class CreateExamDto {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CreateExamDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateExamDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(Type),
    __metadata("design:type", String)
], CreateExamDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEnum(Status),
    __metadata("design:type", String)
], CreateExamDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateExamDto.prototype, "laboratoryIds", void 0);
exports.CreateExamDto = CreateExamDto;
//# sourceMappingURL=create-exam.dto.js.map