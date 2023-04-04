import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BoardListsService } from './board-lists.service';
import { BoardListsResolver } from './board-lists.resolver';
import { BoardCard } from '..//board-cards/entities/board-card.entity';
import { Board } from '..//boards/entities/board.entity';

@Module({
  providers: [BoardListsResolver, BoardListsService],
  imports: [SequelizeModule.forFeature([BoardCard, Board])],
})
export class BoardListsModule {}
