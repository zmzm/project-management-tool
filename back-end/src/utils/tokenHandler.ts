import * as jwt from 'jsonwebtoken';
import { MissingEnvironmentVariable } from '../errors';

export interface ITokenHandler {
  createToken(email: string, expiresIn?: number | string): Promise<string>;
  isTokenValid(token: string): Promise<boolean>;
}

export default class TokenHandler implements ITokenHandler {
  private secret: string;

  constructor() {
    if (!process.env.JWT_SECRET) {
      throw new MissingEnvironmentVariable('JWT_TOKEN');
    }
    this.secret = process.env.JWT_SECRET;
  }

  public createToken(email: string, expiresIn?: number | string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign({ email }, this.secret, { algorithm: 'HS256', expiresIn: expiresIn || '30d' },  (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });
  }

  public isTokenValid(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      });
    });
  }
}
