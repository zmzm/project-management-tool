import { Test, TestingModule } from '@nestjs/testing';
import { BoardCardsResolver } from './board-cards.resolver';
import { BoardCardsService } from './board-cards.service';

describe('BoardCardsResolver', () => {
  let resolver: BoardCardsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardCardsResolver, BoardCardsService],
    }).compile();

    resolver = module.get<BoardCardsResolver>(BoardCardsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
