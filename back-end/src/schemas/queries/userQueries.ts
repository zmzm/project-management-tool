import { GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import UserType from '../types/userType';
import Context from '../../context';
import { User } from '../../models/userModel';

const findAll = {
  type: new GraphQLList(UserType),
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User[]> {
    const users = await ctx.Services.UserService.findAll();
    return users.map(user => new User(user));
  },
};

const findById = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User> {
    const user = await ctx.Services.UserService.findById(args.id);
    return new User(user);
  },
};

const findByEmail = {
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
  findAll,
  findById,
  findByEmail,
};
