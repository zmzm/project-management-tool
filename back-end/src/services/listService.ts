import { List, RawList } from '../models/listModel';
import BaseRepository from '../repositories/baseRepository';
import ListRepository from '../repositories/listRepository';
import BaseService from './baseservice';

export default class ListService extends BaseService<List, RawList> {
  private repo: ListRepository;

  constructor(repo: ListRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<List, RawList> {
    return this.repo;
  }

  /**
   * Find lists by board id
   *
   * @param {number} boardId
   * @returns Promise<List[]>
   * @memberof ListService
   */
  public async findByBoardId(boardId: number): Promise<List[]> {
    const lists = await this.repo.findByQuery({ board_id: boardId });
    return lists.map((list) => new List(list));
  }
}
