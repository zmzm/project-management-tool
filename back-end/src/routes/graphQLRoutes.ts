import * as GraphQLHTTP from 'koa-graphql';
import * as Router from 'koa-router';
import * as Koa from 'koa';

import Postgres from '../database';
import Schema from '../schemas';
import BCryptHasher from '../lib/hasher';
import Context from '../context';
import ServicesContext from '../context/servicesContext';
import UserRepository from '../repositories/userRepository';
import UserService from '../services/userService';

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
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD || '',
        debug: process.env.ENV !== 'production',
      });

      ServicesContext.getInstance()
        .setUserService(
          new UserService(new UserRepository(db), new BCryptHasher(), null),
        );

      db.schemaMigration();
    } catch (e) {
      // console.error(e, 'An error occurred while initializing application.');
    }
  }
}
