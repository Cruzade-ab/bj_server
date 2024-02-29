import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
        {origin: "http://localhost:3001",
        methods: ["POST", "GET", "DELETE", "PUT"],
        allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization'], 
        exposedHeaders: ['Authorization'],}
  )
  await app.listen(3000);
}
bootstrap();
