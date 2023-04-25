import { Module } from '@nestjs/common';
import { SuccesController } from './succes.controller';
import { SuccesService } from './succes.service';
import { Succes} from './succes.entity'
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Succes])],
  controllers: [SuccesController],
  providers: [SuccesService],
  exports: [TypeOrmModule],
})
export class SuccesModule {}
