import { RawRole, Role } from '../models/roleModel';
import BaseRepository from '../repositories/baseRepository';
import RoleRepository from '../repositories/roleRepository';
import BaseService from './baseservice';

export default class RoleService extends BaseService<Role, RawRole> {
  private repo: RoleRepository;

  constructor(repo: RoleRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<Role, RawRole> {
    return this.repo;
  }
}
