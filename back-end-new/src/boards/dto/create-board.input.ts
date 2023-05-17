import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String, { description: 'Board name' })
  name: string;

  @Field(() => Int, { description: 'Team id' })
  teamId: number;

  @Field(() => Boolean, { description: 'Board closed status' })
  closed: boolean;
}
