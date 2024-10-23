import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap(){
    try{
const app = await NestFactory.create(AppModule);
const configService = app.get(ConfigService);



// Enable CORS for specific origins
app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Enable circular dependency detection
app.enableShutdownHooks(); // Optional, if you want proper shutdown
app.enableVersioning(); // Optional, for versioning support
app.setGlobalPrefix('api') // All routes will be prefixed with /api
app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);
// Apply the custom exception filter globally
// app.useGlobalFilters(new AllExceptionsFilter());
// app.useGlobalFilters(new LoggingExceptionFilter());

const config = new DocumentBuilder()
  .setTitle(
    'My First Project',
  )
  .setDescription('API documentation for the First Project application')
  .setVersion('1.0')
  .addTag('First Project')
  .addBearerAuth()
  .addServer('http://localhost:8085')
  .build();

  const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    const port = configService.get('PORT');
    await app.listen(port);
    Logger.log(
      `🚀 Application is running on: ${await app.getUrl()}`,
      'Bootstrap',
    );
  } catch (error) {
    Logger.error('❌ Error starting the application', error, 'Bootstrap');
    process.exit(1); // Force the process to exit after logging the error
  }
}
bootstrap();









