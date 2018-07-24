import * as bcrypt from 'bcryptjs';

export interface Hasher {
  hashPassword(password: string): Promise<string>;
  verifyPassword(password: string, hash: string): Promise<boolean>;
}

export default class BCryptHasher implements Hasher {
  private password: string;

  public async hashPassword(password: string): Promise<string> {
    this.password = password;
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hash(this.password, salt);
  }

  public verifyPassword(password: string, hash: string): Promise<boolean> {
    this.password = password;
    return bcrypt.compare(this.password, hash);
  }
}
