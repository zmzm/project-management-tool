import Postgres from '../database';
import IBaseModel from '../models/baseModel';
import { AppError } from './../errors';

/**
 * Base repository class for all repositories
 *
 * @export
 * @class BaseRepository
 * @template T
 * @template S
 */
export default class BaseRepository<T, S> {
  protected db: Postgres;

  protected table: string;

  constructor(db: Postgres, table: string) {
    this.table = table;
    this.db = db;
  }

  /**
   * Get all entities of @type T from database
   *
   * @returns {Promise<T[]>}
   * @memberof BaseRepository
   */
  public async findAll(): Promise<T[]> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table);

    return result;
  }

  /**
   * Get entity of @type T from database by id
   *
   * @param {number} id
   * @returns {Promise<T>}
   * @memberof BaseRepository
   */
  public async findById(id: number): Promise<T> {
    const conn = await this.db.getConnection();
    const result = await conn
      .select()
      .from(this.table)
      .where({ id })
      .first();

    return result;
  }

  /**
   * Create entity of @type S in database
   *
   * @param {S} entity
   * @param {string[]} fieldsToReturn
   * @returns {Promise<IBaseModelS>}
   * @memberof BaseRepository
   */
  public async create(entity: S, fieldsToReturn: string[]): Promise<IBaseModel> {
    const conn = await this.db.getConnection();
    try {
      // TODO: looks like so presice selection of returning fields is not needed here,
      // switch to '*' - to return all fields instead
      const result = await conn.table(this.table).returning(fieldsToReturn).insert(entity);
      return result;
    } catch (err) {
      throw new AppError(err.code, err.detail, err);
    }
  }

  /**
   * Update entity of @type S in database
   *
   * @param {S} entity
   * @returns {Promise<T>}
   * @memberof BaseRepository
   */
  public async update(entity: S, id: number): Promise<T> {
    const conn = await this.db.getConnection();

    // TODO: find way to get updated entity as a response, to avoid making extra call
    await conn.update(entity).into(this.table).where('id', id);
    return await this.findById(id);
  }

  /**
   * Delete entity of @type T in database by id
   *
   * @param {number} id
   * @returns {Promise<void>}
   * @memberof BaseRepository
   */
  public async delete(id: number): Promise<void> {
    const conn = await this.db.getConnection();

    await conn
      .from(this.table)
      .delete()
      .where({ id });
  }
}
