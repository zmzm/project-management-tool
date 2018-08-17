import { Board, RawBoard } from '../models/boardModel';
import BaseRepository from './baseRepository';
import Postgres from '../database';

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
}
