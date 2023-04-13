import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { CardComment } from '../../card-comments/entities/card-comment.entity';
import { Team } from '../../teams/entities/team.entity';
import { Role } from '../../roles/entities/role.entity';
import { UserRoles } from '../../roles/entities/userRoles.entity';

interface UserCreationAttrs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'User email' })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'User password' })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'User first name' })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'User last name' })
  lastName: string;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @HasMany(() => CardComment)
  @Field(() => [CardComment], { description: 'User comments' })
  comments: CardComment[];

  @BelongsToMany(() => Role, () => UserRoles)
  @Field(() => [Role], { description: 'User roles' })
  roles: Role[];

  @BelongsTo(() => Team)
  team: Team;
}
