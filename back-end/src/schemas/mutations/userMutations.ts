import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import Context from '../../context';
import { User } from '../../models/userModel';
import AuthResponseType from '../types/authResponseType';
import UserType from '../types/userType';
import { AppError, ErrorCodes, ValidationError } from './../../errors';

const createUser = {
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  type: AuthResponseType,
  async resolve(root: any, args: any, ctx: Context<any>) {
    const hashedPassword = await ctx.Services.UserService.hashPassword(
      args.password,
    );
    const userAttributes = Object.assign({}, args, {
      password: hashedPassword,
    });
    let result;

    const userModel = new User(userAttributes, false);
    userModel.setRoleId(2);

    const fieldsToReturn = Object.keys(userModel.toDatabaseObject());
    try {
      result = await ctx.Services.UserService.create(userModel, fieldsToReturn);
      const returnedFields = result[0];
      const jwt = await ctx.Services.UserService.generateJwt(
        returnedFields.email,
      );

      return Object.assign(new User(returnedFields), { token: jwt });
    } catch (err) {
      if (err.code === ErrorCodes.DUPLICATE_ERROR) {
        throw new ValidationError('User with such email already exists', err);
      }

      throw new AppError(err.code, err.detail, err);
    }
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

const login = {
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  type: AuthResponseType,
  async resolve(root: any, args: any, ctx: Context<any>): Promise<User> {
    try {
      const user = await ctx.Services.UserService.login(
        args.email,
        args.password,
      );
      const jwt = await ctx.Services.UserService.generateJwt(user.Email);

      return Object.assign(user, { token: jwt });
    } catch (err) {
      throw err;
    }
  },
};

export default {
  createUser,
  deleteUser,
  login,
  updateUser,
};
