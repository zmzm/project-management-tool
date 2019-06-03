import { NotFoundError } from './../errors';
import Postgres from '../database';
import { Card, RawCard } from '../models/cardModel';
import BaseRepository from './baseRepository';

/**
 * Repository for CRUD operations with Card model
 *
 * @export
 * @class CardRepository
 * @extends {BaseRepository<Card>}
 */
export default class CardRepository extends BaseRepository<Card, RawCard> {
  constructor(db: Postgres) {
    super(db, 'card');
  }

  /**
   * Find cards in database by list id
   *
   * @param {number} listId
   * @returns {Promise<Card>}
   * @memberof CardRepository
   */
  public async findByListId(listId: number): Promise<Card[]> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ list_id: listId });

    if (!result) {
      throw new NotFoundError('Cards not found.');
    }

    return result;
  }
}
