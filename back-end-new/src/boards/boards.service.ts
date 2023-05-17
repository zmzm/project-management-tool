import { Injectable } from '@nestjs/common';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(private readonly boardModel: typeof Board) {}

  create(createBoardInput: CreateBoardInput) {
    return this.boardModel.create(createBoardInput);
  }

  findAll() {
    return this.boardModel.findAll();
  }

  findById(id: number) {
    return this.boardModel.findOne({ where: { id } });
  }

  async update(id: number, updateBoardInput: UpdateBoardInput) {
    const board = await this.findById(id);

    await board.update(updateBoardInput);
    await board.save();

    return board;
  }

  async remove(id: number) {
    const board = await this.findById(id);

    await board.destroy();

    return id;
  }
}
