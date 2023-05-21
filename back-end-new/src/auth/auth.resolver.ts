import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUserInput } from '../users/dto/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  login(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.login(createUserInput);
  }

  @Mutation()
  registration(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.registration(createUserInput);
  }
}
