import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { CardComment } from '../card-comments/entities/card-comment.entity';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [SequelizeModule.forFeature([CardComment])],
})
export class UsersModule {}
