import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import RoleRepository from '../repositories/roleRepository';
import { Role, RawRole } from '../models/roleModel';


export default class RoleService extends BaseService<Role, RawRole> {
  private repo: RoleRepository;

  public getRepository(): BaseRepository<Role, RawRole> {
    return this.repo;
  }

  constructor(repo: RoleRepository) {
    super();
    this.repo = repo;
  }
}
