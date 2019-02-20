import * as bcrypt from 'bcryptjs';

export interface IHasher {
  hashPassword(password: string): Promise<string>;
  verifyPassword(password: string, hash: string): Promise<boolean>;
}

export default class BCryptHasher implements IHasher {
  public async hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hash(password, salt);
  }

  public verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
