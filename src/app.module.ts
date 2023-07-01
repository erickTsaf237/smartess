import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppareilModule } from './appareil/appareil.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Appareil } from './appareil/model/appareil.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql-133953-0.cloudclusters.net',
      port: 19553,
      username: 'admin',
      password: 'IppuvZhN',
      database: 'smartess',
      models: [Appareil],
      autoLoadModels: true,
      ssl: true,
    }),
    AppareilModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
