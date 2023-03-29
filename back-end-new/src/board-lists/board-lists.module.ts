import { Module } from '@nestjs/common';
import { BoardListsService } from './board-lists.service';
import { BoardListsResolver } from './board-lists.resolver';

@Module({
  providers: [BoardListsResolver, BoardListsService]
})
export class BoardListsModule {}
