import * as lodash from 'lodash';
import IBaseModel from '../models/baseModel';
import BaseRepository from '../repositories/baseRepository';

/**
 * Base service class for all services
 *
 * @export
 * @class BaseService
 * @template T
 * @template S
 */
export default abstract class BaseService<T, S> {
  public abstract getRepository(): BaseRepository<T, S>;

  /**
   * Get all entities of @type T
   *
   * @returns {Promise<T[]>}
   * @memberof BaseService
   */
  public async findAll(): Promise<T[]> {
    const entities = await this.getRepository().findAll();
    return entities;
  }

  /**
   * Get entity of @type T by id
   *
   * @param {number} id
   * @returns {Promise<T>}
   * @memberof BaseService
   */
  public async findById(id: number): Promise<IBaseModel> {
    const entity = await this.getRepository().findById(id);
    return entity;
  }

  /**
   * Create entity of @type IBaseModel
   *
   * @param {IBaseModel} entity
   * @param {string[]} fieldsToReturn
   * @returns {Promise<IBaseModel>}
   * @memberof BaseService
   */
  public async create(entity: IBaseModel, fieldsToReturn?: string[]): Promise<IBaseModel> {
    const result = await this.getRepository()
      .create(entity.toDatabaseObject(), fieldsToReturn);

    return result;
  }

  /**
   * Update entity of @type IBaseModel
   *
   * @param {IBaseModel} entity
   * @returns {Promise<IBaseModel>}
   * @memberof BaseService
   */
  public async update(entity: IBaseModel): Promise<IBaseModel> {
    const newEntity = await this.findById(entity.getId());
    const result = await this.getRepository()
      .update(lodash.merge({}, newEntity, entity.toDatabaseObject()), entity.getId());
    return result;
  }

  /**
   * Delete entity of @type T
   *
   * @param {number} id
   * @returns {Promise<void>}
   * @memberof BaseService
   */
  public delete(id: number): Promise<void> {
    return this.getRepository().delete(id);
  }
}
