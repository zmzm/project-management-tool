import Authenticator from '../lib/auth';
import BaseService from './baseservice';
import UserRepository from '../repositories/userRepository';
import { Hasher } from '../lib/hasher';
import { User, RawUser } from '../models/userModel';
import { ValidationError } from '../errors';
import BaseRepository from '../repositories/baseRepository';


export default class UserService extends BaseService<User, RawUser> {
  private repo: UserRepository;

  private hasher: Hasher;

  private auth: Authenticator;

  public getRepository(): BaseRepository<User, RawUser> {
    return this.repo;
  }

  constructor(repo: UserRepository, hasher: Hasher, auth: Authenticator) {
    super();
    this.repo = repo;
    this.hasher = hasher;
    this.auth = auth;
  }

  /**
   * Find user by email
   *
   * @param {string} email
   * @returns {Promise<User>}
   * @memberof UserService
   */
  public async findByEmail(email: string): Promise<User> {
    const user = await this.repo.findByEmail(email);
    return user;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.repo.findByEmail(email);

    if (await this.hasher.verifyPassword(password, user.Password)) {
      return '';
    }

    throw new ValidationError('Wrong credentials');
  }
}
