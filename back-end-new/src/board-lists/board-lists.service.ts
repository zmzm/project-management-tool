import { Injectable } from '@nestjs/common';
import { CreateBoardListInput } from './dto/create-board-list.input';
import { UpdateBoardListInput } from './dto/update-board-list.input';

@Injectable()
export class BoardListsService {
  create(createBoardListInput: CreateBoardListInput) {
    return 'This action adds a new boardList';
  }

  findAll() {
    return `This action returns all boardLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardList`;
  }

  update(id: number, updateBoardListInput: UpdateBoardListInput) {
    return `This action updates a #${id} boardList`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardList`;
  }
}
