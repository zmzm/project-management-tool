import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Context from '../../context';
import { User } from '../../models/userModel';
import SignUpResponseType from '../types/signUpResponseType';
import UserType from '../types/userType';

const createUser = {
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  type: SignUpResponseType,
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
  args: {
    id: { type: GraphQLID },
  },
  type: UserType,
  async resolve(root: any, args: any, ctx: Context<any>) {
    await ctx.Services.UserService.delete(args.id);
  },
};

const updateUser = {
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLInt) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
  },
  type: UserType,
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
  createUser,
  deleteUser,
  updateUser,
};
