import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnivModule } from './univ/univ.module';

@Module({
  imports: [UnivModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
