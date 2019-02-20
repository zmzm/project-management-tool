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
}
