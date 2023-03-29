import { Injectable } from '@nestjs/common';
import { CreateBoardCardInput } from './dto/create-board-card.input';
import { UpdateBoardCardInput } from './dto/update-board-card.input';

@Injectable()
export class BoardCardsService {
  create(createBoardCardInput: CreateBoardCardInput) {
    return 'This action adds a new boardCard';
  }

  findAll() {
    return `This action returns all boardCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardCard`;
  }

  update(id: number, updateBoardCardInput: UpdateBoardCardInput) {
    return `This action updates a #${id} boardCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardCard`;
  }
}
