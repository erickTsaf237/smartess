import { Module } from '@nestjs/common';
import { AppareilController } from './appareil.controller';
import { AppareilService } from './appareil.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Appareil } from './model/appareil.model';

@Module({
  imports: [SequelizeModule.forFeature([Appareil])],
  controllers: [AppareilController],
  providers: [AppareilService],
})

export class AppareilModule {}
