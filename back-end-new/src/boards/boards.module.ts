import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';
import { Team } from '../teams/entities/team.entity';
import { BoardList } from '../board-lists/entities/board-list.entity';

@Module({
  providers: [BoardsResolver, BoardsService],
  imports: [SequelizeModule.forFeature([Team, BoardList])],
})
export class BoardsModule {}
