import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BoardCardsService } from './board-cards.service';
import { BoardCardsResolver } from './board-cards.resolver';
import { CardComment } from '..//card-comments/entities/card-comment.entity';

@Module({
  providers: [BoardCardsResolver, BoardCardsService],
  imports: [SequelizeModule.forFeature([CardComment])],
})
export class BoardCardsModule {}
