import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Files } from './entities/fileEntity';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(Files)
        private readonly fileRepository: Repository<File>,
    ) {}
    
    async showAll() {
        return await this.fileRepository.find();
    }

    async searchFile(text: string): Promise<File[]>{
        return await this.fileRepository.find({
            where: Like(`%${text}%`),
        });
    }

    
}
