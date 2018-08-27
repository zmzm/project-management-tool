import { Team, RawTeam } from '../models/teamModel';
import BaseRepository from './baseRepository';
import Postgres from '../database';

/**
 * Repository for CRUD operations with Team model
 *
 * @export
 * @class TeamRepository
 * @extends {BaseRepository<Team>}
 */
export default class TeamRepository extends BaseRepository<Team, RawTeam> {
  constructor(db: Postgres) {
    super(db, 'team');
  }
}
