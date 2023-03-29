import { Test, TestingModule } from '@nestjs/testing';
import { CardCommentsResolver } from './card-comments.resolver';
import { CardCommentsService } from './card-comments.service';

describe('CardCommentsResolver', () => {
  let resolver: CardCommentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardCommentsResolver, CardCommentsService],
    }).compile();

    resolver = module.get<CardCommentsResolver>(CardCommentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
