import { CreateCardCommentInput } from './create-card-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCardCommentInput extends PartialType(CreateCardCommentInput) {
  @Field(() => Int)
  id: number;
}
