import { ValidationError } from '../errors';
import { RawUser, User } from '../models/userModel';
import BaseRepository from '../repositories/baseRepository';
import UserRepository from '../repositories/userRepository';
import { IHasher } from '../utils/hasher';
import { ITokenHandler } from '../utils/tokenHandler';
import BaseService from './baseservice';

export default class UserService extends BaseService<User, RawUser> {
  private repo: UserRepository;

  private hasher: IHasher;

  private tokenHandler: ITokenHandler;

  constructor(repo: UserRepository, hasher: IHasher, tokenHandler: ITokenHandler) {
    super();
    this.repo = repo;
    this.hasher = hasher;
    this.tokenHandler = tokenHandler;
  }

  public getRepository(): BaseRepository<User, RawUser> {
    return this.repo;
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

  /**
   * Hash password for newly created user
   *
   * @param {string} password
   * @returns {Promise<string>}
   * @memberof UserService
   */
  public async hashPassword(password: string) {
    return await this.hasher.hashPassword(password);
  }

  public async generateJwt(email: string, expiresIn?: number | string) {
    return this.tokenHandler.createToken(email, expiresIn);
  }

  /**
   * Login existed user
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   * @memberof UserService
   */
  public async login(email: string, password: string): Promise<User> {
    const user = await this.repo.findByEmail(email);

    if (await this.hasher.verifyPassword(password, user.Password)) {
      return user;
    }

    throw new ValidationError('Wrong credentials');
  }
}
