import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, DeepPartial } from 'typeorm';
import { Files } from './entities/fileEntity';
import { ConfigService } from '@nestjs/config';

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
        try{
            return await this.fileRepository.find({
                where: Like(`%${text}%`),
            });
        }catch(err){
            return err;
        }
    }

    async fileUpload(fileData: DeepPartial<Files>[]): Promise<Files[]>{
        try{
            
        }catch(err){
            return err;
        }
        
    }

    async checkVirus(){
        
    }

    async fileDownload(){

    }

    
}
