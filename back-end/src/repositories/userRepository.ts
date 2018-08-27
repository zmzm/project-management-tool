import { RawUser, User } from '../models/userModel';
import { NotFoundError } from '../errors';
import BaseRepository from './baseRepository';
import Postgres from '../database';

/**
 * Repository for CRUD operations with User model
 *
 * @export
 * @class UserRepository
 * @extends {BaseRepository<User>}
 */
export default class UserRepository extends BaseRepository<User, RawUser> {
  constructor(db: Postgres) {
    super(db, 'user');
  }

  /**
   * Find user in database by email
   *
   * @param {string} email
   * @returns {Promise<User>}
   * @memberof UserRepository
   */
  public async findByEmail(email: string): Promise<User> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ email })
      .first();

    if (!result) {
      throw new NotFoundError('User does not exist');
    }

    return new User(result);
  }
}
