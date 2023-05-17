import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
  @Field(() => String, { description: 'Role type' })
  type: string;

  @Field(() => String, { description: 'Role description' })
  description: string;
}
