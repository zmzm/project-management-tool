import { CreateBoardCardInput } from './create-board-card.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardCardInput extends PartialType(CreateBoardCardInput) {
  @Field(() => Int)
  id: number;
}
