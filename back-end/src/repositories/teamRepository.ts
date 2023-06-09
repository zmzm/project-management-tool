import Postgres from '../database';
import { NotFoundError } from '../errors';
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

  /**
   * Find team in database by teamName
   *
   * @param {string} teamName
   * @returns {Promise<Team>}
   * @memberof TeamRepository
   */
  public async findByTeamName(teamName: string): Promise<Team> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ team_name: teamName })
      .first();

    if (!result) {
      throw new NotFoundError('Team doesn\'t exist');
    }

    return new Team(result);
  }
}
