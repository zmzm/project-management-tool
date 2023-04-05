import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Dialect } from 'sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import * as path from 'path';

import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { BoardsModule } from './boards/boards.module';
import { RolesModule } from './roles/roles.module';
import { BoardCardsModule } from './board-cards/board-cards.module';
import { CardCommentsModule } from './card-comments/card-comments.module';
import { BoardListsModule } from './board-lists/board-lists.module';
import { User } from './users/entities/user.entity';
import { Team } from './teams/entities/team.entity';
import { Role } from './roles/entities/role.entity';
import { CardComment } from './card-comments/entities/card-comment.entity';
import { Board } from './boards/entities/board.entity';
import { BoardCard } from './board-cards/entities/board-card.entity';
import { BoardList } from './board-lists/entities/board-list.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DB_DIALECT as Dialect,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.ENV || 'development',
      models: [User, Team, Role, CardComment, Board, BoardCard, BoardList],
      autoLoadModels: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UsersModule,
    TeamsModule,
    BoardsModule,
    RolesModule,
    BoardCardsModule,
    CardCommentsModule,
    BoardListsModule,
  ],
})
export class AppModule {}
