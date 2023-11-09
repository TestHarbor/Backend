import { Controller, Get, Post } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
    constructor(private readonly fileService:FileService) {}

    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    @Get('all')
    getAll() {
        return this.fileService.showAll();
    }
}
