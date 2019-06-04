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
}
