import { Injectable } from '@nestjs/common';
import { CreateCardCommentInput } from './dto/create-card-comment.input';
import { UpdateCardCommentInput } from './dto/update-card-comment.input';
import { CardComment } from './entities/card-comment.entity';

@Injectable()
export class CardCommentsService {
  constructor(private readonly cardModel: typeof CardComment) {}

  create(createCardCommentInput: CreateCardCommentInput) {
    return this.cardModel.create(createCardCommentInput);
  }

  findAll() {
    return this.cardModel.findAll();
  }

  findById(id: number) {
    return this.cardModel.findOne({ where: { id } });
  }

  async update(id: number, updateCardCommentInput: UpdateCardCommentInput) {
    const card = await this.findById(id);

    await card.update(updateCardCommentInput);
    await card.save();

    return card;
  }

  async remove(id: number) {
    const card = await this.findById(id);

    await card.destroy();

    return id;
  }
}
