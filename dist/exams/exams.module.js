"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamsModule = void 0;
const laboratory_entity_1 = require("../laboratory/entities/laboratory.entity");
const common_1 = require("@nestjs/common");
const exams_service_1 = require("./exams.service");
const exams_controller_1 = require("./exams.controller");
const exam_entity_1 = require("./entities/exam.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ExamsModule = class ExamsModule {
};
ExamsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([exam_entity_1.Exam, laboratory_entity_1.Laboratory])],
        controllers: [exams_controller_1.ExamsController],
        providers: [exams_service_1.ExamsService]
    })
], ExamsModule);
exports.ExamsModule = ExamsModule;
//# sourceMappingURL=exams.module.js.map