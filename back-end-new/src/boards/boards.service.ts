import { Injectable } from '@nestjs/common';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Injectable()
export class BoardsService {
  create(createBoardInput: CreateBoardInput) {
    return 'This action adds a new board';
  }

  findAll() {
    return `This action returns all boards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardInput: UpdateBoardInput) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
