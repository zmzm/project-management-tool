import { NotFoundError } from './../errors';
import Postgres from '../database';
import { Board, RawBoard } from '../models/boardModel';
import BaseRepository from './baseRepository';

/**
 * Repository for CRUD operations with Board model
 *
 * @export
 * @class BoardRepository
 * @extends {BaseRepository<Board>}
 */
export default class BoardRepository extends BaseRepository<Board, RawBoard> {
  constructor(db: Postgres) {
    super(db, 'board');
  }

    /**
   * Find boards in database by team id
   *
   * @param {number} teamId
   * @returns {Promise<User>}
   * @memberof UserRepository
   */
  public async findByTeamId(teamId: number): Promise<Board[]> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ team_id: teamId });

    if (!result) {
      throw new NotFoundError('Boards not found.');
    }

    return result;
  }
}
