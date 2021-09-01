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
exports.Exam = void 0;
const laboratory_entity_1 = require("../../laboratory/entities/laboratory.entity");
const typeorm_1 = require("typeorm");
let Exam = class Exam {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Exam.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Exam.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: 'Analise clinica' }),
    __metadata("design:type", String)
], Exam.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: 'Ativo' }),
    __metadata("design:type", String)
], Exam.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToMany(() => laboratory_entity_1.Laboratory, { cascade: true, onDelete: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Exam.prototype, "laboratories", void 0);
Exam = __decorate([
    typeorm_1.Entity({ name: 'exams' })
], Exam);
exports.Exam = Exam;
//# sourceMappingURL=exam.entity.js.map