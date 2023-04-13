import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CardComment } from '../card-comments/entities/card-comment.entity';
import { Role } from '../roles/entities/role.entity';
import { UserRoles } from '../roles/entities/userRoles.entity';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [SequelizeModule.forFeature([CardComment, Role, UserRoles])],
})
export class UsersModule {}
