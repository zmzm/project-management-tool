import User from '../entities/user';
import { ValidationError } from '../errors';
import Authenticator from '../lib/auth';
import { Hasher } from '../lib/hasher';
import UserRepository from '../repositories/userRepository';

export default class UserService {
  private repo: UserRepository;

  private hasher: Hasher;

  private auth: Authenticator;

  constructor(repo: UserRepository, hasher: Hasher, auth: Authenticator) {
    this.repo = repo;
    this.hasher = hasher;
    this.auth = auth;
  }

  public async findByEmail(email: string): Promise<User> {
    return this.repo.findByEmail(email);
  }

  public async create(user: User): Promise<User> {
    const hashPassword = await this.hasher.hashPassword(user.password);

    user.password = hashPassword;

    return this.repo.insert(user);
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.repo.findByEmail(email);

    if (await this.hasher.verifyPassword(password, user.password)) {
      return '';
    }

    throw new ValidationError('Wrong credentials');
  }

  public update(user: User): Promise<User> {
    return this.repo.update(user);
  }

  public delete(userId: number): Promise<void> {
    return this.repo.delete(userId);
  }
}
