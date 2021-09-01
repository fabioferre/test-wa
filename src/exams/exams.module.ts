import { Laboratory } from 'src/laboratory/entities/laboratory.entity';
import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { Exam } from './entities/exam.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Laboratory])],
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule {}
