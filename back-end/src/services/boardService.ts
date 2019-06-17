import { Board, RawBoard } from '../models/boardModel';
import BaseRepository from '../repositories/baseRepository';
import BoardRepository from '../repositories/boardRepository';
import BaseService from './baseservice';

export default class BoardService extends BaseService<Board, RawBoard> {
  private repo: BoardRepository;

  constructor(repo: BoardRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<Board, RawBoard> {
    return this.repo;
  }

   /**
   * Find boards by team id
   *
   * @param {teamId} number
   * @returns {Promise<Board[]>}
   * @memberof BoardService
   */
  public async findByTeamId(teamId: number): Promise<Board[]> {
    const boards = await this.repo.findByQuery({ team_id: teamId });
    return boards.map((board) => new Board(board));
  }

   /**
   * Find boards by owner id
   *
   * @param {ownerId} number
   * @returns {Promise<Board[]>}
   * @memberof BoardService
   */
  public async findByOwnerId(ownerId: number): Promise<Board[]> {
    const boards = await this.repo.findByQuery({ owner_id: ownerId, team_id: null });
    return boards.map((board) => new Board(board));
  }
}
