import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import BoardRepository from '../repositories/boardRepository';
import { Board, RawBoard } from '../models/boardModel';


export default class BoardService extends BaseService<Board, RawBoard> {
  private repo: BoardRepository;

  public getRepository(): BaseRepository<Board, RawBoard> {
    return this.repo;
  }

  constructor(repo: BoardRepository) {
    super();
    this.repo = repo;
  }
}
