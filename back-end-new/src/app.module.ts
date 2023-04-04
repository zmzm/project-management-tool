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
      database: process.env.POSTGRES_DB,
      models: [],
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
