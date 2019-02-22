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
}
