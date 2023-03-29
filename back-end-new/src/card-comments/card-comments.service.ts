import { Injectable } from '@nestjs/common';
import { CreateCardCommentInput } from './dto/create-card-comment.input';
import { UpdateCardCommentInput } from './dto/update-card-comment.input';

@Injectable()
export class CardCommentsService {
  create(createCardCommentInput: CreateCardCommentInput) {
    return 'This action adds a new cardComment';
  }

  findAll() {
    return `This action returns all cardComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardComment`;
  }

  update(id: number, updateCardCommentInput: UpdateCardCommentInput) {
    return `This action updates a #${id} cardComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardComment`;
  }
}
