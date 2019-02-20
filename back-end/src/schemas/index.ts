import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import UserMutation from './mutations/userMutations';
import UsersQuery from './queries/userQueries';

/**
 * Creating GraphQL schema
 *
 * @export
 * @class Schema
 */
export default class Schema {

  public static get(): GraphQLSchema {
    if (!Schema.instance) {
      Schema.instance = new Schema();
    }
    return Schema.instance.schema;
  }
  private static instance: Schema;

  private rootQuery: GraphQLObjectType = new GraphQLObjectType({
    fields: {
      findAllUsers: UsersQuery.findAll,
      findUserByEmail: UsersQuery.findByEmail,
      findUserById: UsersQuery.findById,
    },
    name: 'Query',
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    fields: {
      createUser: UserMutation.createUser,
      deleteUser: UserMutation.deleteUser,
      updateUser: UserMutation.updateUser,
    },
    name: 'Mutation',
  });

  private schema: GraphQLSchema = new GraphQLSchema({
    mutation: this.rootMutation,
    query: this.rootQuery,
  });
}
