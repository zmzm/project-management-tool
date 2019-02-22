import Postgres from '../database';
import { Comment, RawComment } from '../models/commentModel';
import BaseRepository from './baseRepository';

/**
 * Repository for CRUD operations with Comment model
 *
 * @export
 * @class CommentRepository
 * @extends {BaseRepository<Comment>}
 */
export default class CommentRepository extends BaseRepository<Comment, RawComment> {
  constructor(db: Postgres) {
    super(db, 'comment');
  }
}
