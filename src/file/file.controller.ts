import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { Files } from './entities/fileEntity';

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
    
    @Get('search')
    searchFile(@Query('text') text: string) {
        return this.fileService.searchFile(text);
    }

    @Post('upload')
    fileUpload(fileData: Files[] ) {
        return this.fileService.fileUpload(fileData);
    }


}
