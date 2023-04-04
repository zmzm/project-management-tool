import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsResolver } from './teams.resolver';
import { Board } from '../boards/entities/board.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [TeamsResolver, TeamsService],
  imports: [SequelizeModule.forFeature([Board])],
})
export class TeamsModule {}
