import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
})
export class AuthModule {}
