import { ValidationError } from '../errors';
import Authenticator from '../lib/auth';
import { Hasher } from '../lib/hasher';
import UserRepository from '../repositories/userRepository';
import { User } from '../models/userModel';

export default class UserService {
  private repo: UserRepository;

  private hasher: Hasher;

  private auth: Authenticator;

  constructor(repo: UserRepository, hasher: Hasher, auth: Authenticator) {
    this.repo = repo;
    this.hasher = hasher;
    this.auth = auth;
  }

  public async findAll(): Promise<User[]> {
    const users = await this.repo.findAll();
    return users.map(user => new User(user));
  }

  public async findById(id: number): Promise<User> {
    const user = await this.repo.findById(id);
    return new User(user);
  }

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

  public async create(user: User): Promise<User> {
    const hashPassword = await this.hasher.hashPassword(user.Password);
    user.setPassword(hashPassword);
    const result = await this.repo.create(user.toDatabaseObject());

    return new User(result);
  }

  public async update(user: User): Promise<User> {
    const result = await this.repo.update(user.toDatabaseObject());
    return new User(result);
  }

  public delete(userId: number): Promise<void> {
    return this.repo.delete(userId);
  }
}
