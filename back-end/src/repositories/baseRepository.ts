import Postgres from '../database';
import BaseModel from '../models/baseModel';

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
  public async findById(id: number): Promise<BaseModel> {
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
   * @returns {Promise<BaseModelS>}
   * @memberof BaseRepository
   */
  public async create(entity: S, fieldsToReturn?: string[]): Promise<BaseModel> {
    const conn = await this.db.getConnection();
    try {
      const result = await conn.table(this.table).returning(fieldsToReturn).insert(entity);
      return result;
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new Error('Already exists');
      }
      throw err;
    }
  }

  /**
   * Update entity of @type S in database
   *
   * @param {S} entity
   * @returns {Promise<BaseModel>}
   * @memberof BaseRepository
   */
  public async update(entity: S, id: number): Promise<BaseModel> {
    const conn = await this.db.getConnection();
    const result = await conn.update(entity).into(this.table).where('id', id);
    return this.findById(result);
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
