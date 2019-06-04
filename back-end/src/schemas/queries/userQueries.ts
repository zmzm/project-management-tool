import { AppError } from './../../errors';
import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import Context from '../../context';
import { User } from '../../models/userModel';
import UserType from '../types/userType';

const findAll = {
  type: new GraphQLList(UserType),
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User[]> {
    const users = await ctx.Services.UserService.findAll();
    return users.map(user => new User(user));
  },
};

const findById = {
  args: {
    id: { type: GraphQLInt },
  },
  type: UserType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User> {
    try {
        const dbUser = await ctx.Services.UserService.findById(args.id);
        return new User(dbUser);
    } catch (err) {
      throw new AppError(err.code, err.detail, err);
    }
  },
};

const findByEmail = {
  args: {
    email: { type: GraphQLString },
  },
  type: UserType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User> {
    const user = await ctx.Services.UserService.findByEmail(args.email);
    return user;
  },
};

export default {
  findAll,
  findByEmail,
  findById,
};
