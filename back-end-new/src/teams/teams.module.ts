import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TeamsService } from './teams.service';
import { TeamsResolver } from './teams.resolver';
import { Board } from '../boards/entities/board.entity';
import { User } from '../users/entities/user.entity';

@Module({
  providers: [TeamsResolver, TeamsService],
  imports: [SequelizeModule.forFeature([Board, User])],
})
export class TeamsModule {}
