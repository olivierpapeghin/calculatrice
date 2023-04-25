import { Module } from '@nestjs/common';
import { EchecController } from './echec.controller';
import { EchecService } from './echec.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Echec} from './echec.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Echec])],
  controllers: [EchecController],
  providers: [EchecService],
  exports: [TypeOrmModule],
})
export class EchecModule {}
