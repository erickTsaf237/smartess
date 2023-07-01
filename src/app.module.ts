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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
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
