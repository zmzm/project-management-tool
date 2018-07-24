import {
  GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID,
} from 'graphql';

import UsersQuery from './queries/userQueries';
import UserType from './types/userType';
import Context from '../context';
import UserMutation from './queries/userMutations';

export default class Schema {
  private static instance: Schema;

  private rootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      findUserByEmail: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
        },
        resolve(root: any, args: any, ctx: Context<any>) {
          return new UsersQuery().findUserByEmail(root, args, ctx);
        },
      },
    },
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      deleteUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
        },
        resolve(root: any, args: any, ctx: Context<any>) {
          return new UserMutation().deleteUser(root, args, ctx);
        },
      },
    },
  });

  private schema: GraphQLSchema = new GraphQLSchema({
    query: this.rootQuery,
    mutation: this.rootMutation,
  });

  static get(): GraphQLSchema {
    if (!Schema.instance) {
      Schema.instance = new Schema();
    }
    return Schema.instance.schema;
  }
}
