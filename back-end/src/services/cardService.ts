import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import CardRepository from '../repositories/cardRepository';
import { Card, RawCard } from '../models/cardModel';


export default class CardService extends BaseService<Card, RawCard> {
  private repo: CardRepository;

  public getRepository(): BaseRepository<Card, RawCard> {
    return this.repo;
  }

  constructor(repo: CardRepository) {
    super();
    this.repo = repo;
  }
}
