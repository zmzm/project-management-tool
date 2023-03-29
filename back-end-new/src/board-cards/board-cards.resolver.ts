import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardCardsService } from './board-cards.service';
import { BoardCard } from './entities/board-card.entity';
import { CreateBoardCardInput } from './dto/create-board-card.input';
import { UpdateBoardCardInput } from './dto/update-board-card.input';

@Resolver(() => BoardCard)
export class BoardCardsResolver {
  constructor(private readonly boardCardsService: BoardCardsService) {}

  @Mutation(() => BoardCard)
  createBoardCard(@Args('createBoardCardInput') createBoardCardInput: CreateBoardCardInput) {
    return this.boardCardsService.create(createBoardCardInput);
  }

  @Query(() => [BoardCard], { name: 'boardCards' })
  findAll() {
    return this.boardCardsService.findAll();
  }

  @Query(() => BoardCard, { name: 'boardCard' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardCardsService.findOne(id);
  }

  @Mutation(() => BoardCard)
  updateBoardCard(@Args('updateBoardCardInput') updateBoardCardInput: UpdateBoardCardInput) {
    return this.boardCardsService.update(updateBoardCardInput.id, updateBoardCardInput);
  }

  @Mutation(() => BoardCard)
  removeBoardCard(@Args('id', { type: () => Int }) id: number) {
    return this.boardCardsService.remove(id);
  }
}
