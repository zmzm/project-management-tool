import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
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
