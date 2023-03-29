import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardCommentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
