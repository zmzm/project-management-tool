import { Comment, RawComment } from '../models/commentModel';
import BaseRepository from '../repositories/baseRepository';
import CommentRepository from '../repositories/commentRepository';
import BaseService from './baseservice';

export default class CommentService extends BaseService<Comment, RawComment> {
  private repo: CommentRepository;

  constructor(repo: CommentRepository) {
    super();
    this.repo = repo;
  }

  public getRepository(): BaseRepository<Comment, RawComment> {
    return this.repo;
  }

    /**
   * Find comments by card id
   *
   * @param {cardId} number
   * @returns {Promise<Comment[]>}
   * @memberof CommentService
   */
  public async findByCardId(listId: number): Promise<Comment[]> {
    const comments = await this.repo.findByQuery({ card_id: listId });
    return comments.map((comment) => new Comment(comment));
  }
}
