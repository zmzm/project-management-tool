import { Injectable } from '@nestjs/common';
import { CreateBoardCardInput } from './dto/create-board-card.input';
import { UpdateBoardCardInput } from './dto/update-board-card.input';
import { InjectModel } from '@nestjs/sequelize';
import { BoardCard } from './entities/board-card.entity';

@Injectable()
export class BoardCardsService {
  constructor(
    @InjectModel(BoardCard)
    private readonly cardModel: typeof BoardCard
  ) {}

  async create(createBoardCardInput: CreateBoardCardInput) {
    const newCard = await this.cardModel.create(createBoardCardInput);
    return newCard;
  }

  findAll() {
    return this.cardModel.findAll();
  }

  findById(id: number) {
    return this.cardModel.findOne({ where: { id } });
  }

  async update(id: number, updateBoardCardInput: UpdateBoardCardInput) {
    const card = await this.findById(id);

    await card.update(updateBoardCardInput);
    await card.save();

    return card;
  }

  async remove(id: number) {
    const card = await this.findById(id);

    await card.destroy();

    return id;
  }
}
