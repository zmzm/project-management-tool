import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CardCommentsService } from './card-comments.service';
import { CardComment } from './entities/card-comment.entity';
import { CreateCardCommentInput } from './dto/create-card-comment.input';
import { UpdateCardCommentInput } from './dto/update-card-comment.input';

@Resolver(() => CardComment)
export class CardCommentsResolver {
  constructor(private readonly cardCommentsService: CardCommentsService) {}

  @Mutation(() => CardComment)
  createCardComment(
    @Args('createCardCommentInput')
    createCardCommentInput: CreateCardCommentInput
  ) {
    return this.cardCommentsService.create(createCardCommentInput);
  }

  @Query(() => [CardComment], { name: 'cardComments' })
  findAll() {
    return this.cardCommentsService.findAll();
  }

  @Query(() => CardComment, { name: 'cardComment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cardCommentsService.findById(id);
  }

  @Mutation(() => CardComment)
  updateCardComment(
    @Args('updateCardCommentInput')
    updateCardCommentInput: UpdateCardCommentInput
  ) {
    return this.cardCommentsService.update(
      updateCardCommentInput.id,
      updateCardCommentInput
    );
  }

  @Mutation(() => CardComment)
  removeCardComment(@Args('id', { type: () => Int }) id: number) {
    return this.cardCommentsService.remove(id);
  }
}
