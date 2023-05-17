import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardListInput {
  @Field(() => String, { description: 'Board list name' })
  name: string;

  @Field(() => Int, { description: 'Board id' })
  boardId: number;
}
