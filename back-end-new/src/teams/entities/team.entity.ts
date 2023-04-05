import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { Board } from '../../boards/entities/board.entity';
import { User } from '../../users/entities/user.entity';

interface TeamCreationAttrs {
  name: string;
}
@ObjectType()
@Table({ tableName: 'teams' })
export class Team extends Model<Team, TeamCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Team id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Team name' })
  name: string;

  @HasMany(() => Board)
  @Field(() => [Board], { description: 'Team boards' })
  boards: Board[];

  @HasMany(() => User)
  @Field(() => [User], { description: 'Team members' })
  users: User[];
}
