import { Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    
    @Get('search')
    searchFile(@Query('text') text: string) {
        console.log("Param is " + text);
        return this.fileService.searchFile(text);
    }


}
