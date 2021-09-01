import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { ExamsModule } from './exams/exams.module';
import { Laboratory } from './laboratory/entities/laboratory.entity';
import { Exam } from './exams/entities/exam.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'wa-db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LaboratoryModule,
    ExamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
