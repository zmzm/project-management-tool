import BaseService from './baseservice';
import BaseRepository from '../repositories/baseRepository';
import CommentRepository from '../repositories/commentRepository';
import { Comment, RawComment } from '../models/commentModel';


export default class CommentService extends BaseService<Comment, RawComment> {
  private repo: CommentRepository;

  public getRepository(): BaseRepository<Comment, RawComment> {
    return this.repo;
  }

  constructor(repo: CommentRepository) {
    super();
    this.repo = repo;
  }
}
