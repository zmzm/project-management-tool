import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import TeamQuery from './queries/teamQueries';
import UserQuery from './queries/userQueries';

import TeamMutation from './mutations/teamMutations';
import UserMutation from './mutations/userMutations';

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
      findAllUsers: UserQuery.findAll,
      findUserByEmail: UserQuery.findByEmail,
      findUserById: UserQuery.findById,

      findAllTeams: TeamQuery.findAll,
      findTeamById: TeamQuery.findById,
      findTeamByTeamName: TeamQuery.findByTeamName,
    },
    name: 'Query',
  });

  private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    fields: {
      createUser: UserMutation.createUser,
      deleteUser: UserMutation.deleteUser,
      updateUser: UserMutation.updateUser,

      createTeam: TeamMutation.createTeam,
      deleteTeam: TeamMutation.deleteTeam,
      updateTeam: TeamMutation.updateTeam,
    },
    name: 'Mutation',
  });

  private schema: GraphQLSchema = new GraphQLSchema({
    mutation: this.rootMutation,
    query: this.rootQuery,
  });
}
