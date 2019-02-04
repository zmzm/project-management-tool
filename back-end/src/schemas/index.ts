import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import UserQuery from './queries/userQueries';
import TeamQuery from './queries/teamQueries';

import UserMutation from './mutations/userMutations';
import TeamMutation from './mutations/teamMutations';

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
      findAllUsers: UserQuery.findAll,
      findUserById: UserQuery.findById,
      findUserByEmail: UserQuery.findByEmail,

      findAllTeams: TeamQuery.findAll,
      findTeamById: TeamQuery.findById,
      findTeamByTeamName: TeamQuery.findByTeamName,
    },
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: UserMutation.createUser,
      deleteUser: UserMutation.deleteUser,
      updateUser: UserMutation.updateUser,

      createTeam: TeamMutation.createTeam,
      deleteTeam: TeamMutation.deleteTeam,
      updateTeam: TeamMutation.updateTeam,
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
