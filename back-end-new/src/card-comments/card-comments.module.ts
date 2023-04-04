import { Module } from '@nestjs/common';
import { CardCommentsService } from './card-comments.service';
import { CardCommentsResolver } from './card-comments.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';
import { BoardCard } from '../board-cards/entities/board-card.entity';

@Module({
  providers: [CardCommentsResolver, CardCommentsService],
  imports: [SequelizeModule.forFeature([User, BoardCard])],
})
export class CardCommentsModule {}
