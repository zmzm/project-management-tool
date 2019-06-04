import { Card, RawCard } from '../models/cardModel';
import BaseRepository from '../repositories/baseRepository';
import CardRepository from '../repositories/cardRepository';
import BaseService from './baseservice';

export default class CardService extends BaseService<Card, RawCard> {
  private repo: CardRepository;

  constructor(repo: CardRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<Card, RawCard> {
    return this.repo;
  }

  /**
   * Find cards by list id
   *
   * @param {listId} number
   * @returns {Promise<Card>}
   * @memberof CardService
   */
  public async findByListId(listId: number): Promise<Card[]> {
    const boards = await this.repo.findByQuery({ list_id: listId });
    return boards.map((board) => new Card(board));
  }
}
