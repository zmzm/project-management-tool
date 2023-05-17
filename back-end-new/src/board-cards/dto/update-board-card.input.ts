import { CreateBoardCardInput } from './create-board-card.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardCardInput extends PartialType(CreateBoardCardInput) {
  @Field(() => Int, { description: 'Card id' })
  id: number;
}
