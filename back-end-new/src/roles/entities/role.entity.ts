import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { UserRoles } from './userRoles.entity';

interface RoleCreationAttrs {
  type: string;
  description: string;
}
@ObjectType()
@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Role id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Role type', defaultValue: 'USER' })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Role description' })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
