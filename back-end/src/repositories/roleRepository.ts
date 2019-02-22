import Postgres from '../database';
import { RawRole, Role } from '../models/roleModel';
import BaseRepository from './baseRepository';

/**
 * Repository for CRUD operations with Role model
 *
 * @export
 * @class RoleRepository
 * @extends {BaseRepository<Role>}
 */
export default class RoleRepository extends BaseRepository<Role, RawRole> {
  constructor(db: Postgres) {
    super(db, 'role');
  }
}
