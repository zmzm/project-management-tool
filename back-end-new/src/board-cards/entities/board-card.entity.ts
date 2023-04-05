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
import { CardComment } from '../../card-comments/entities/card-comment.entity';
import { BoardList } from '../../board-lists/entities/board-list.entity';

interface BoardCardCreationattrs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@ObjectType()
@Table({ tableName: 'board_cards' })
export class BoardCard extends Model<BoardCard, BoardCardCreationattrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Card id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Card name' })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @Field(() => String, { description: 'Card about' })
  about: string;

  @ForeignKey(() => BoardList)
  @Column({ type: DataType.INTEGER })
  boardListId: number;

  @HasMany(() => CardComment)
  @Field(() => [CardComment], { description: 'Card comments' })
  comments: CardComment[];

  @BelongsTo(() => BoardList)
  boardList: BoardList;
}
