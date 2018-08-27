import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import TeamRepository from '../repositories/teamRepository';
import { Team, RawTeam } from '../models/teamModel';


export default class TeamService extends BaseService<Team, RawTeam> {
  private repo: TeamRepository;

  public getRepository(): BaseRepository<Team, RawTeam> {
    return this.repo;
  }

  constructor(repo: TeamRepository) {
    super();
    this.repo = repo;
  }
}
