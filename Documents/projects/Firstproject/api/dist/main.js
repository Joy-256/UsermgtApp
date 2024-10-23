"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const configService = app.get(config_1.ConfigService);
        app.enableCors({
            origin: ['http://localhost:3000', 'http://localhost:5173'],
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        });
        app.enableShutdownHooks();
        app.enableVersioning();
        app.setGlobalPrefix('api');
        app.useLogger(['error', 'warn', 'log', 'debug', 'verbose']);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('My First Project')
            .setDescription('API documentation for the First Project application')
            .setVersion('1.0')
            .addTag('First Project')
            .addBearerAuth()
            .addServer('http://localhost:8085')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, document);
        const port = configService.get('PORT');
        await app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: ${await app.getUrl()}`, 'Bootstrap');
    }
    catch (error) {
        common_1.Logger.error('❌ Error starting the application', error, 'Bootstrap');
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map