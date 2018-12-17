import * as Koa from 'koa';
import * as Router from 'koa-router';
import { Server } from 'http';
import GraphQLRoutes from './routes/graphQLRoutes';


require('dotenv').config();

export class AppServer extends Server {
  private app: Koa;

  private server: Server;

  constructor(app: Koa) {
    super();
    this.app = app;
  }

  public listenPort(port: string): Server {
    this.server = this.app.listen(port);
    console.log(`Server listening on port ${port}...`);
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

function createServer(): AppServer {
  const app = new Koa();
  const appSrv = new AppServer(app);
  const router = new Router();

  GraphQLRoutes.map(router, app);

  return <AppServer>appSrv.listenPort(String(process.env.PORT));
}

const server = createServer();

export default server;
