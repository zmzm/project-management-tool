import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import UsersQuery from './queries/userQueries';
import UserMutation from './mutations/userMutations';

/**
 * Creating GraphQL schema
 *
 * @export
 * @class Schema
 */
export default class Schema {
  private static instance: Schema;

  private rootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      findAllUsers: UsersQuery.findAll,
      findUserById: UsersQuery.findById,
      findUserByEmail: UsersQuery.findByEmail,
    },
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      deleteUser: UserMutation.deleteUser,
      createUser: UserMutation.createUser,
      updateUser: UserMutation.updateUser,
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
