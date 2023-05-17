import { CreateBoardCardInput } from './create-board-card.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardCardInput extends PartialType(CreateBoardCardInput) {}
