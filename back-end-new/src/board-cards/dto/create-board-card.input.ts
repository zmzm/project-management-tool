import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBoardCardInput {
  @Field(() => String, { description: 'Card name' })
  name: string;

  @Field(() => String, { description: 'Card about' })
  about: string;

  @Field(() => Int, {
    description: 'ID of the board list to which the card belongs',
  })
  boardListId: number;
}
