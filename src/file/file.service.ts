import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
