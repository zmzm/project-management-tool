import { Test, TestingModule } from '@nestjs/testing';
import { CardCommentsService } from './card-comments.service';

describe('CardCommentsService', () => {
  let service: CardCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardCommentsService],
    }).compile();

    service = module.get<CardCommentsService>(CardCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
