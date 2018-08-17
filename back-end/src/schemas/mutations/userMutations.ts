import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { User, RawUser } from '../../models/userModel';
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
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const userModel = new User()
      .setFirstName(args.firstName)
      .setLastName(args.lastName);
    const user = await ctx.Services.UserService.update(new RawUser(userModel));
    return new User(user);
  },
};

export default {
  deleteUser,
  updateUser,
};
