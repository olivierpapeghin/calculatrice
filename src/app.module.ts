import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchecModule } from './echec/echec.module';
import { EchecController } from './echec/echec.controller';
import { EchecService } from './echec/echec.service';
import { SuccesModule } from './succes/succes.module';
import { SuccesController } from './succes/succes.controller';
import { SuccesService } from './succes/succes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [EchecModule, SuccesModule,TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController,EchecController,SuccesController],
  providers: [AppService,EchecService,SuccesService],
})
export class AppModule {}
