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
exports.LaboratoryService = void 0;
const laboratory_entity_1 = require("./entities/laboratory.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let LaboratoryService = class LaboratoryService {
    constructor(laboratoryRepository) {
        this.laboratoryRepository = laboratoryRepository;
    }
    create(createLaboratoryDto) {
        return this.laboratoryRepository.save(createLaboratoryDto);
    }
    findAll() {
        return this.laboratoryRepository.find();
    }
    findOne(id) {
        return this.laboratoryRepository.findOne(id);
    }
    update(id, updateLaboratoryDto) {
        return this.laboratoryRepository.update(id, updateLaboratoryDto);
    }
    remove(id) {
        return this.laboratoryRepository.delete(id);
    }
};
LaboratoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(laboratory_entity_1.Laboratory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LaboratoryService);
exports.LaboratoryService = LaboratoryService;
//# sourceMappingURL=laboratory.service.js.map