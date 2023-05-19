import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  login(@Args('createUserInput') createUserInput: CreateBoardInput) {
    return this.authService.login();
  }

  @Mutation()
  registration(@Args('createUserInput') createUserInput: UpdateBoardInput) {
    return this.authService.registration();
  }
}
