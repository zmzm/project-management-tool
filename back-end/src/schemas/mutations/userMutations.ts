import { GraphQLID, GraphQLString } from 'graphql';
import UserType from '../types/userType';
import Context from '../../context';

const deleteUser = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    await ctx.Services.UserService.delete(args.id);
  },
};

const updateUser = {
  type: UserType,
  args: {
    user: { firstName: GraphQLString },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const user = await ctx.Services.UserService.update(args.user);
    return user;
  },
};

export default {
  deleteUser,
  updateUser,
};
