import { Comment, RawComment } from '../models/commentModel';
import BaseRepository from './baseRepository';
import Postgres from '../database';

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
