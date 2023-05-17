import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field(() => String, { description: 'Team name' })
  name: string;
}
