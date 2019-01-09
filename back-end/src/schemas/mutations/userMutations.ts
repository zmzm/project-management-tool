import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import { User } from '../../models/userModel';
import UserType from '../types/userType';
import SignUpResponseType from '../types/signUpResponseType';
import Context from '../../context';

const createUser = {
  type: SignUpResponseType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const hashedPassword = await ctx.Services.UserService.hashPassword(args.password);
    const userAttributes = Object.assign({}, args, { password: hashedPassword });

    const userModel = new User(userAttributes, false);

    const fieldsToReturn = Object.keys(userModel.toDatabaseObject());
    const result = await ctx.Services.UserService.create(userModel, fieldsToReturn);
    const returnedFields = result[0];
    const jwt = await ctx.Services.UserService.generateJwt(returnedFields.email);

    return Object.assign(new User(returnedFields), { token: jwt });
  },
};

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
    id: { type: new GraphQLNonNull(GraphQLInt) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(root: any, args: any, ctx: Context<any>) {
    const userModel = new User()
      .setId(args.id)
      .setFirstName(args.firstName)
      .setLastName(args.lastName);
    const user = await ctx.Services.UserService.update(userModel);
    return new User(user);
  },
};

export default {
  deleteUser,
  createUser,
  updateUser,
};
