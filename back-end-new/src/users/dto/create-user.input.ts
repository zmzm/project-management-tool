import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User first name' })
  firstName: string;

  @Field(() => String, { description: 'User last name' })
  lastName: string;

  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User password' })
  password: string;

  @Field(() => Int, { description: 'Team id' })
  teamId: number;
}
