import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { Role } from './entities/role.entity';
import { User } from '../users/entities/user.entity';
import { UserRoles } from './entities/userRoles.entity';

@Module({
  providers: [RolesResolver, RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
})
export class RolesModule {}
