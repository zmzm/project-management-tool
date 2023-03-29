import { CreateBoardListInput } from './create-board-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardListInput extends PartialType(CreateBoardListInput) {
  @Field(() => Int)
  id: number;
}
