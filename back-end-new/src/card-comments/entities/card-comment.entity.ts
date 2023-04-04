import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { BoardCard } from '../../board-cards/entities/board-card.entity';

interface CardCommentCreationAttrs {
  text: string;
}
@ObjectType()
@Table({ tableName: 'card_comments' })
export class CardComment extends Model<CardComment, CardCommentCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Comment id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Comment text' })
  text: string;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => BoardCard)
  card: BoardCard;

  @ForeignKey(() => BoardCard)
  @Column({ type: DataType.INTEGER })
  cardId: number;
}
