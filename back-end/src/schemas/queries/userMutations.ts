import { GraphQLID } from 'graphql';
import UserType from '../types/userType';
import Context from '../../context';

const deleteUser = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    await this.ctx.Services.UserService.delete(args.id);
  },
};

export default {
  deleteUser,
};
