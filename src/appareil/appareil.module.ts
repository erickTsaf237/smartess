import { Module } from '@nestjs/common';
import { AppareilController } from './appareil.controller';
import { AppareilService } from './appareil.service';

@Module({
  controllers: [AppareilController],
  providers: [AppareilService]
})
export class AppareilModule {}
