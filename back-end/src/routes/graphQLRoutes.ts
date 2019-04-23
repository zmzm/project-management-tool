import * as Koa from 'koa';
import * as GraphQLHTTP from 'koa-graphql';
import * as Router from 'koa-router';
import { AppError } from './../errors';

import Context from '../context';
import ServicesContext from '../context/servicesContext';
import Postgres from '../database';
import BoardRepository from '../repositories/boardRepository';
import CardRepository from '../repositories/cardRepository';
import CommentRepository from '../repositories/commentRepository';
import ListRepository from '../repositories/listRepository';
import RoleRepository from '../repositories/roleRepository';
import TeamRepository from '../repositories/teamRepository';
import UserRepository from '../repositories/userRepository';
import Schema from '../schemas';
import BoardService from '../services/boardService';
import CardService from '../services/cardService';
import CommentService from '../services/commentService';
import ListService from '../services/listService';
import RoleService from '../services/roleService';
import TeamService from '../services/teamService';
import UserService from '../services/userService';
import BCryptHasher from '../utils/hasher';
import TokenHandler from '../utils/tokenHandler';

/**
 * Registering GraphQL routes and creating context for GraphQL
 *
 * @export
 * @class GraphQLRoutes
 */
export default class GraphQLRoutes {
  public static map(router: Router, app: Koa): void {
    GraphQLRoutes.buildContext();

    router.all(
      '/graphql',
      GraphQLHTTP({
        context: new Context(ServicesContext.getInstance()),
        graphiql: true,
        schema: Schema.get(),
      }),
    );
    app.use(router.routes()).use(router.allowedMethods());
  }

  private static buildContext(): void {
    try {
      const db = new Postgres({
        database: String(process.env.DB_DATABASE),
        debug: Boolean(process.env.ENV !== 'production'),
        host: String(process.env.DB_HOST),
        password: String(process.env.DB_PASSWORD || ''),
        port: String(process.env.DB_PORT),
        user: String(process.env.DB_USER),
      });

      ServicesContext.getInstance()
        .setBoardService(new BoardService(new BoardRepository(db)))
        .setCardService(new CardService(new CardRepository(db)))
        .setCommentService(new CommentService(new CommentRepository(db)))
        .setListService(new ListService(new ListRepository(db)))
        .setRoleService(new RoleService(new RoleRepository(db)))
        .setTeamService(new TeamService(new TeamRepository(db)))
        .setUserService(new UserService(new UserRepository(db), new BCryptHasher(), new TokenHandler()));
    } catch (e) {
      throw new AppError(e.code, e.message, e);
    }
  }
}
