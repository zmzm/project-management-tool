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
import { Team } from '../../teams/entities/team.entity';
import { BoardList } from '../../board-lists/entities/board-list.entity';

interface BoardCreationAttrs {
  name: string;
  closed: boolean;
}
@ObjectType()
@Table({ tableName: 'board' })
export class Board extends Model<Board, BoardCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Board id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Board name' })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => Boolean, { description: 'Is board closed', defaultValue: false })
  closed: boolean;

  @HasMany(() => BoardList)
  @Field(() => [BoardList], { description: 'Board lists' })
  lists: BoardList[];

  @BelongsTo(() => Team)
  team: Team;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;
}
