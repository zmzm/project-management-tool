import { Module } from '@nestjs/common';
import { BoardCardsService } from './board-cards.service';
import { BoardCardsResolver } from './board-cards.resolver';

@Module({
  providers: [BoardCardsResolver, BoardCardsService]
})
export class BoardCardsModule {}
