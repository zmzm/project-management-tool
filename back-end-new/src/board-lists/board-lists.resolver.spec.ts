import { Test, TestingModule } from '@nestjs/testing';
import { BoardListsResolver } from './board-lists.resolver';
import { BoardListsService } from './board-lists.service';

describe('BoardListsResolver', () => {
  let resolver: BoardListsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardListsResolver, BoardListsService],
    }).compile();

    resolver = module.get<BoardListsResolver>(BoardListsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
