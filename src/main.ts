import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties:true,
    }),
  );
  const config = new DocumentBuilder()
  .setTitle('Wa Project')
  .setDescription('Documentação da api')
  .setVersion('1.0')
  .addTag('wa')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  
}
bootstrap();
