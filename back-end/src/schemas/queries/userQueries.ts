import { GraphQLString } from 'graphql';
import UserType from '../types/userType';
import User from '../../entities/user';
import Context from '../../context';

const findUserByEmail = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
  },
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User> {
    const user = await ctx.Services.UserService.findByEmail(args.email);
    return user;
  },
};

export default {
  findUserByEmail,
};
