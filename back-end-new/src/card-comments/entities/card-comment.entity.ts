import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CardComment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
