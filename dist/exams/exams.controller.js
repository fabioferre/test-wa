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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamsController = exports.FilterExamDto = void 0;
const common_1 = require("@nestjs/common");
const exams_service_1 = require("./exams.service");
const create_exam_dto_1 = require("./dto/create-exam.dto");
const update_exam_dto_1 = require("./dto/update-exam.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FilterExamDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], FilterExamDto.prototype, "name", void 0);
exports.FilterExamDto = FilterExamDto;
let ExamsController = class ExamsController {
    constructor(examsService) {
        this.examsService = examsService;
    }
    create(createExamDto) {
        return this.examsService.create(createExamDto);
    }
    findAll() {
        return this.examsService.findAll();
    }
    findOne(id) {
        return this.examsService.findOne(+id);
    }
    update(id, updateExamDto) {
        return this.examsService.update(+id, updateExamDto);
    }
    remove(id) {
        return this.examsService.remove(+id);
    }
    removeAll() {
        return this.examsService.removeAll();
    }
    findFromName(filter) {
        return this.examsService.findFromName(filter);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: create_exam_dto_1.CreateExamDto, description: 'Criar um exame novo' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_dto_1.CreateExamDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_exam_dto_1.UpdateExamDto]),
    __metadata("design:returntype", Promise)
], ExamsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "remove", null);
__decorate([
    common_1.Delete(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "removeAll", null);
__decorate([
    common_1.Post('filter'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiBody({ type: FilterExamDto, description: 'Filtrar exames' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findFromName", null);
ExamsController = __decorate([
    common_1.Controller('exams'),
    __metadata("design:paramtypes", [exams_service_1.ExamsService])
], ExamsController);
exports.ExamsController = ExamsController;
//# sourceMappingURL=exams.controller.js.map