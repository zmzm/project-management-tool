import * as GraphQLHTTP from 'koa-graphql';
import * as Router from 'koa-router';
import * as Koa from 'koa';

import Postgres from '../database';
import Schema from '../schemas';
import BCryptHasher from '../utils/hasher';
import Context from '../context';
import ServicesContext from '../context/servicesContext';
import UserRepository from '../repositories/userRepository';
import UserService from '../services/userService';
import BoardService from '../services/boardService';
import BoardRepository from '../repositories/boardRepository';
import CardService from '../services/cardService';
import CardRepository from '../repositories/cardRepository';
import CommentService from '../services/commentService';
import CommentRepository from '../repositories/commentRepository';
import ListService from '../services/listService';
import ListRepository from '../repositories/listRepository';
import RoleService from '../services/roleService';
import RoleRepository from '../repositories/roleRepository';
import TeamService from '../services/teamService';
import TeamRepository from '../repositories/teamRepository';

/**
 * Registering GraphQL routes and creating context for GraphQL
 *
 * @export
 * @class GraphQLRoutes
 */
export default class GraphQLRoutes {
  static map(router: Router, app: Koa): void {
    GraphQLRoutes.buildContext();

    router.all(
      '/graphql',
      GraphQLHTTP({
        schema: Schema.get(),
        graphiql: true,
        context: new Context(ServicesContext.getInstance()),
      }),
    );
    app.use(router.routes()).use(router.allowedMethods());
  }

  private static buildContext(): void {
    try {
      const db = new Postgres({
        database: String(process.env.DB_DATABASE),
        host: String(process.env.DB_HOST),
        port: String(process.env.DB_PORT),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD || ''),
        debug: Boolean(process.env.ENV !== 'production'),
      });

      ServicesContext.getInstance()
        .setBoardService(new BoardService(new BoardRepository(db)))
        .setCardService(new CardService(new CardRepository(db)))
        .setCommentService(new CommentService(new CommentRepository(db)))
        .setListService(new ListService(new ListRepository(db)))
        .setRoleService(new RoleService(new RoleRepository(db)))
        .setTeamService(new TeamService(new TeamRepository(db)))
        .setUserService(new UserService(new UserRepository(db), new BCryptHasher()));

      // db.schemaMigration();
    } catch (e) {
      // console.error(e, 'An error occurred while initializing application.');
    }
  }
}
