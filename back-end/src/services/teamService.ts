import { RawTeam, Team } from '../models/teamModel';
import BaseRepository from '../repositories/baseRepository';
import TeamRepository from '../repositories/teamRepository';
import BaseService from './baseservice';

export default class TeamService extends BaseService<Team, RawTeam> {
  private repo: TeamRepository;

  constructor(repo: TeamRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<Team, RawTeam> {
    return this.repo;
  }
}
