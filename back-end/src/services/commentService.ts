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
}
