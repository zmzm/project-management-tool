import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import ListRepository from '../repositories/listRepository';
import { List, RawList } from '../models/listModel';


export default class ListService extends BaseService<List, RawList> {
  private repo: ListRepository;

  public getRepository(): BaseRepository<List, RawList> {
    return this.repo;
  }

  constructor(repo: ListRepository) {
    super();
    this.repo = repo;
  }
}
