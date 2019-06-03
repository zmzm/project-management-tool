import { NotFoundError } from './../errors';
import Postgres from '../database';
import { List, RawList } from '../models/listModel';
import BaseRepository from './baseRepository';

/**
 * Repository for CRUD operations with List model
 *
 * @export
 * @class ListRepository
 * @extends {BaseRepository<List>}
 */
export default class ListRepository extends BaseRepository<List, RawList> {
  constructor(db: Postgres) {
    super(db, 'list');
  }

  /**
   * Find lists in database by board id
   *
   * @param {number} boardId
   * @returns {Promise<List>}
   * @memberof CardRepository
   */
  public async findByBoardId(boardId: number): Promise<List[]> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ board_id: boardId });

    if (!result) {
      throw new NotFoundError('Lists not found.');
    }

    return result;
  }
}
