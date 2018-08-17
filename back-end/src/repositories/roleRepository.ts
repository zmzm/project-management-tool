import { Role, RawRole } from '../models/roleModel';
import BaseRepository from './baseRepository';
import Postgres from '../database';

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
