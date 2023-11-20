import { Module } from '@nestjs/common';
import { UnivService } from './univ.service';
import { UnivController } from './univ.controller';

@Module({
  providers: [UnivService],
  controllers: [UnivController],
})
export class UnivModule {}
