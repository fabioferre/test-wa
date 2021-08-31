import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';

@Module({
  controllers: [LaboratoryController],
  providers: [LaboratoryService]
})
export class LaboratoryModule {}
