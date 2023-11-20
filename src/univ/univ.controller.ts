import { Controller, Get } from '@nestjs/common';
import { UnivService } from './univ.service';

@Controller('univ')
export class UnivController {
  constructor(private readonly univService: UnivService) {}

  @Get()
  get() {
    return this.univService.get();
  }
}
