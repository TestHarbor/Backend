import { Controller, Get, Param, Post, Query, UploadedFile, Body } from '@nestjs/common';
import { FileService } from './file.service';
import { Multer } from 'multer';
import { Files } from './entities/fileEntity';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('file')
export class FileController {
    constructor(private readonly fileService:FileService) {}

    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    @Get('/all')
    getAll() {
        return this.fileService.showAll();
    }
    
    @Get('/search')
    searchFile(@Query('text') text: string) {
        return this.fileService.searchFile(text);
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file, @Body() fileInfo: Partial<Files>): Promise<void>{
        const name =  `${ file.Year }학년도 ${ file.Grade }학년 ${ file.Semester }학기 ${ file.Exam }고사 ${ file.Subject } ${ file.Type }`
        const savedFile = await this.fileService.createFile({
            Name: name,
            FileType: file.mimetype,
            Path: 'TEST',
            Grade: fileInfo.Grade,
            Year: fileInfo.Year,
            Semester: fileInfo.Semester,
            Exam: fileInfo.Exam,
            Subject: fileInfo.Subject,
            Type: fileInfo.Type,
            Uploader: fileInfo.Uploader,
        });
    }
}
