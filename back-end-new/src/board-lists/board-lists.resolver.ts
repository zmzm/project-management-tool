import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardListsService } from './board-lists.service';
import { BoardList } from './entities/board-list.entity';
import { CreateBoardListInput } from './dto/create-board-list.input';
import { UpdateBoardListInput } from './dto/update-board-list.input';

@Resolver(() => BoardList)
export class BoardListsResolver {
  constructor(private readonly boardListsService: BoardListsService) {}

  @Mutation(() => BoardList)
  createBoardList(
    @Args('createBoardListInput') createBoardListInput: CreateBoardListInput
  ) {
    return this.boardListsService.create(createBoardListInput);
  }

  @Query(() => [BoardList], { name: 'boardLists' })
  findAll() {
    return this.boardListsService.findAll();
  }

  @Query(() => BoardList, { name: 'boardList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardListsService.findById(id);
  }

  @Mutation(() => BoardList)
  updateBoardList(
    @Args('updateBoardListInput') updateBoardListInput: UpdateBoardListInput
  ) {
    return this.boardListsService.update(
      updateBoardListInput.id,
      updateBoardListInput
    );
  }

  @Mutation(() => BoardList)
  removeBoardList(@Args('id', { type: () => Int }) id: number) {
    return this.boardListsService.remove(id);
  }
}
