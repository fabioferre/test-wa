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
exports.LaboratoryController = void 0;
const common_1 = require("@nestjs/common");
const laboratory_service_1 = require("./laboratory.service");
const create_laboratory_dto_1 = require("./dto/create-laboratory.dto");
const update_laboratory_dto_1 = require("./dto/update-laboratory.dto");
let LaboratoryController = class LaboratoryController {
    constructor(laboratoryService) {
        this.laboratoryService = laboratoryService;
    }
    create(createLaboratoryDto) {
        return this.laboratoryService.create(createLaboratoryDto);
    }
    findAll() {
        return this.laboratoryService.findAll();
    }
    findOne(id) {
        return this.laboratoryService.findOne(+id);
    }
    update(id, updateLaboratoryDto) {
        return this.laboratoryService.update(+id, updateLaboratoryDto);
    }
    remove(id) {
        return this.laboratoryService.remove(+id);
    }
    removeAll() {
        return this.laboratoryService.removeAll();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_laboratory_dto_1.CreateLaboratoryDto]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_laboratory_dto_1.UpdateLaboratoryDto]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "remove", null);
__decorate([
    common_1.Delete(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "removeAll", null);
LaboratoryController = __decorate([
    common_1.Controller('laboratory'),
    __metadata("design:paramtypes", [laboratory_service_1.LaboratoryService])
], LaboratoryController);
exports.LaboratoryController = LaboratoryController;
//# sourceMappingURL=laboratory.controller.js.map