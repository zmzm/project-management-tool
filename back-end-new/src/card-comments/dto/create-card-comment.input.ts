import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardCommentInput {
  @Field(() => String, { description: 'Comment text' })
  text: string;

  @Field(() => Int, { description: 'Card id' })
  cardId: number;

  @Field(() => Int, { description: 'User id' })
  userId: number;
}
