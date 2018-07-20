import * as Koa from 'koa';
import * as Router from 'koa-router';
import { Server } from 'http';
import GraphQLRoutes from './routes/graphQLRoutes';


require('dotenv').config();

class AppServer {
  private app: Koa;

  private server: Server;

  constructor(app: Koa) {
    this.app = app;
  }

  public listen(port: string): Server {
    this.server = this.app.listen(port);
    return this.server;
  }

  public getServer(): Server {
    return this.server;
  }

  public closeServer(): void {
    if (this.server === undefined) {
      throw new Error('Server is not initialized.');
    }

    this.server.close();
  }
}

export default async function createServer(): Promise<AppServer> {
  const app = new Koa();
  const appSrv = new AppServer(app);
  const router = new Router();

  GraphQLRoutes.map(router, app);

  appSrv.listen(process.env.PORT);

  return appSrv;
}

createServer();
