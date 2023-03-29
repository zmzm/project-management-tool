import { Test, TestingModule } from '@nestjs/testing';
import { BoardCardsService } from './board-cards.service';

describe('BoardCardsService', () => {
  let service: BoardCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardCardsService],
    }).compile();

    service = module.get<BoardCardsService>(BoardCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
