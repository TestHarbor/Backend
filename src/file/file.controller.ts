import { Controller, Get, Param, Post } from '@nestjs/common';
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
    
    @Get('search/:text')
    searchFile(@Param('text') text: string) {
        return this.fileService.searchFile(text);
    }

    
}
