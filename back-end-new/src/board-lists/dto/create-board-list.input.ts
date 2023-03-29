import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardListInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
