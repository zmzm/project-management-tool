import { Card, RawCard } from '../models/cardModel';
import BaseRepository from './baseRepository';
import Postgres from '../database';

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
}
