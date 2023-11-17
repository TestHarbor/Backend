import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, DeepPartial } from 'typeorm';
import { Files } from './entities/fileEntity';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(Files)
        private readonly fileRepository: Repository<Files>,
    ) {}
    
    async showAll() {
        return await this.fileRepository.find();
    }

    async searchFile(text: string): Promise<Files[]>{
        try{
            return await this.fileRepository.find({
                where: [
                    { Name : Like(`%${text}%`) },
            ],
            });
        }catch(err){
            return err;
        }
    }

    async createFile(fileData: Partial<Files>): Promise<Files> {
        const file = await this.fileRepository.create(fileData);
        return await this.fileRepository.save(file);
    }
    
}
