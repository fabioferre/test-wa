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
exports.ExamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const laboratory_entity_1 = require("../laboratory/entities/laboratory.entity");
const typeorm_2 = require("typeorm");
const exam_entity_1 = require("./entities/exam.entity");
let ExamsService = class ExamsService {
    constructor(examRepository, laboratoryRepository) {
        this.examRepository = examRepository;
        this.laboratoryRepository = laboratoryRepository;
    }
    async create(createExamDto) {
        const examModel = this.examRepository.create(createExamDto);
        examModel.laboratories = (await this.laboratoryRepository.findByIds(createExamDto.laboratoryIds)).filter((lab) => lab.status == 'Ativo');
        return this.examRepository.save(examModel);
    }
    findAll() {
        return this.examRepository.find({ relations: ["laboratories"] });
    }
    findOne(id) {
        return this.examRepository.findOne(id, { relations: ["laboratories"] });
    }
    async update(id, updateExamDto) {
        const examModel = await this.examRepository.findOne(id);
        examModel.laboratories = (await this.laboratoryRepository.findByIds(updateExamDto.laboratoryIds)).filter((lab) => lab.status == 'Ativo');
        this.examRepository.save(examModel);
        delete updateExamDto.laboratoryIds;
        return this.examRepository.update(id, updateExamDto);
    }
    remove(id) {
        return this.examRepository.delete(id);
    }
};
ExamsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(exam_entity_1.Exam)),
    __param(1, typeorm_1.InjectRepository(laboratory_entity_1.Laboratory)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExamsService);
exports.ExamsService = ExamsService;
//# sourceMappingURL=exams.service.js.map