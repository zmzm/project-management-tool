import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(createUserInput: CreateUserInput) {
    const user = await this.validateUser(createUserInput);
    return this.generateToken(user);
  }

  async registration(createUserInput: CreateUserInput) {
    const user = await this.userService.findByEmail(createUserInput.email);

    if (user) {
      throw new HttpException('User aleady exists', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(createUserInput.password, 7);
    const newUser = await this.userService.create({
      ...createUserInput,
      password: hashedPassword,
    });

    return this.generateToken(newUser);
  }

  private generateToken(user: User) {
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserInput) {
    const user = await this.userService.findByEmail(userDto.email);
    const passwordsEqual = await bcrypt.compare(
      userDto.password,
      user.password
    );

    if (user && passwordsEqual) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Email or password is incorrect.',
    });
  }
}
