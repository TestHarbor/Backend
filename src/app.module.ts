import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './database.module';
import { FileService } from './file/file.service';
import { FileController } from './file/file.controller';

@Module({
  imports: [FileModule, DataBaseModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  })],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
