import { Test, TestingModule } from '@nestjs/testing';
import { BoardListsService } from './board-lists.service';

describe('BoardListsService', () => {
  let service: BoardListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardListsService],
    }).compile();

    service = module.get<BoardListsService>(BoardListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
