import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Files } from './entities/fileEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Files])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService, TypeOrmModule],
})
export class FileModule {}
