import * as knex from 'knex';
import * as path from 'path';

export interface Configuration {
  host: string;
  port: string;
  user: string;
  password: string;
  database: string;
  debug: boolean;
}

export default class Postgres {
  private config: Configuration;

  private connection: knex;

  constructor(config: Configuration) {
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
      this.connection = undefined;
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
      client: 'postgres',
      connection: {
        host: this.config.host,
        port: this.config.port,
        user: this.config.user,
        password: this.config.password,
        database: this.config.database,
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