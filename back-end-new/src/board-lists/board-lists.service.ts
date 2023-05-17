import { Injectable } from '@nestjs/common';
import { CreateBoardListInput } from './dto/create-board-list.input';
import { UpdateBoardListInput } from './dto/update-board-list.input';
import { BoardList } from './entities/board-list.entity';

@Injectable()
export class BoardListsService {
  constructor(private readonly listModel: typeof BoardList) {}

  create(createBoardListInput: CreateBoardListInput) {
    return this.listModel.create(createBoardListInput);
  }

  findAll() {
    return this.listModel.findAll();
  }

  findById(id: number) {
    return this.listModel.findOne({ where: { id } });
  }

  async update(id: number, updateBoardListInput: UpdateBoardListInput) {
    const list = await this.findById(id);

    await list.update(updateBoardListInput);
    await list.save();

    return list;
  }

  async remove(id: number) {
    const list = await this.findById(id);

    await list.destroy();

    return id;
  }
}
