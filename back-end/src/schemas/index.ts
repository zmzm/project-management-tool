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
      findUserByEmail: UsersQuery.findUserByEmail,
    },
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      deleteUser: UserMutation.deleteUser,
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
