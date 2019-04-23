import * as knex from 'knex';
import * as path from 'path';

export interface IConfiguration {
  host: string;
  port: string;
  user: string;
  password: string;
  database: string;
  debug: boolean;
}

export default class Postgres {
  private config: IConfiguration;

  private connection: knex;

  constructor(config: IConfiguration) {
    this.config = config;
  }

  public async getConnection(): Promise<knex> {
    if (!this.connection) {
      this.connection = await this.createConnection();
    }

    return this.connection;
  }

  public async getTransaction(): Promise<knex.Transaction> {
    const connection = await this.getConnection();

    return new Promise<knex.Transaction>((resolve, reject) => {
      try {
        connection.transaction((trx: knex.Transaction) => {
          resolve(trx);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  public async closeDatabase(): Promise<void> {
    if (this.connection) {
      await this.connection.destroy();
      // this.connection = undefined;
    }
  }

  public async schemaMigration() {
    const connection = await this.getConnection();

    await connection.migrate.latest({
      directory: path.resolve(__dirname, './migrations'),
    });
  }

  private async createConnection(): Promise<knex> {
    const config: knex.Config = {
      client: 'pg',
      connection: {
        database: this.config.database,
        host: this.config.host,
        password: this.config.password,
        port: this.config.port,
        user: this.config.user,
      },
      debug: this.config.debug,
      migrations: {
        tableName: 'migrations',
      },
    };

    const db = knex(config);

    // Test database connectivity!
    await db.raw('select 1').timeout(500);

    return db;
  }
}
