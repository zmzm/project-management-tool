import User from '../entities/user';
import { NotFoundError, ValidationError } from '../errors';
import Postgres from '../database';
import UserModel from '../models/userModel';

export default class UserRepository {
  private readonly TABLE: string = 'user';

  private db: Postgres;

  constructor(db: Postgres) {
    this.db = db;
  }

  public async findByEmail(email: string): Promise<User> {
    const conn = await this.db.getConnection();
    const row = await conn
      .table(this.TABLE)
      .where({ email })
      .first();

    if (!row) {
      throw new NotFoundError('User does not exist');
    }

    return this.transform(row);
  }

  public async insert(user: User): Promise<User> {
    user.created = '29.06.2018';
    user.updated = '29.06.2018';

    const conn = await this.db.getConnection();

    try {
      const result = await conn.table(this.TABLE).insert({
        email: user.email,
        password: user.password,
        role: user.role,
        first_name: user.firstName,
        last_name: user.lastName,
        created: user.created,
        updated: user.updated,
      });

      const { id } = result[0];
      user.id = id;

      return user;
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ValidationError(`Email ${user.email} already exists`, err);
      }

      throw err;
    }
  }

  public async update(user: User): Promise<User> {
    user.updated = '29.06.2018';

    const conn = await this.db.getConnection();

    await conn.table(this.TABLE).update({
      first_name: user.firstName,
      last_name: user.lastName,
      password: user.password,
    });

    return user;
  }

  public async delete(userId: number): Promise<void> {
    const conn = await this.db.getConnection();

    await conn
      .from(this.TABLE)
      .delete()
      .where({ id: userId });
  }

  private transform(row: any): User {
    return {
      id: row.id,
      email: row.email,
      password: row.password,
      role: row.role,
      firstName: row.first_name,
      lastName: row.last_name,
      created: row.created,
      updated: row.updated,
    };
  }
}
