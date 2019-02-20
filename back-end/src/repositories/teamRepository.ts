import Postgres from '../database';
import { RawTeam, Team } from '../models/teamModel';
import BaseRepository from './baseRepository';

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
