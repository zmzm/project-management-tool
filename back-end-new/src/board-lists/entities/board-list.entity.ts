import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Board } from '../../boards/entities/board.entity';
import { BoardCard } from '../../board-cards/entities/board-card.entity';

interface BoardListCreationattrs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@ObjectType()
@Table({ tableName: 'board_lists' })
export class BoardList extends Model<BoardList, BoardListCreationattrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Board list id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Board list name' })
  name: string;

  @ForeignKey(() => Board)
  @Column({ type: DataType.INTEGER })
  boardId: number;

  @HasMany(() => BoardCard)
  @Field(() => [BoardCard], { description: 'Board cards' })
  cards: BoardCard[];

  @BelongsTo(() => Board)
  board: Board;
}
