import { Module } from '@nestjs/common';
import { CardCommentsService } from './card-comments.service';
import { CardCommentsResolver } from './card-comments.resolver';

@Module({
  providers: [CardCommentsResolver, CardCommentsService]
})
export class CardCommentsModule {}
